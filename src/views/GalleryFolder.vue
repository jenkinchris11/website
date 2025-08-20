<template>
  <div class="page container fade-up">
    <h1>{{ folder }}</h1>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="{ 'crazy-frame': folder === 'Crazy Frames' }"
        @click="openLightbox(index)"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </div>

  <div
    v-if="lightboxOpen"
    class="lightbox"
    @click.self="closeLightbox"
  >
    <button class="nav prev" @click.stop="prevImage">‹</button>
    <img
      :src="images[currentIndex].src"
      :alt="images[currentIndex].alt"
      class="lightbox-image"
    />
    <button class="nav next" @click.stop="nextImage">›</button>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch, nextTick } from 'vue'
const props = defineProps({
  folder: {
    type: String,
    required: true,
  },
})

const modules = import.meta.glob("../assets/Gallery/*/*.jpg", {
  eager: true,
  import: "default",
})

const images = computed(() => {
  const list = []
  for (const [path, src] of Object.entries(modules)) {
    if (path.includes(`/Gallery/${props.folder}/`)) {
      const parts = path.split('/')
      const file = parts[parts.length - 1]
      const caption = file.replace(/\.[^/.]+$/, '')
      list.push({ src, alt: caption, caption })
    }
  }
  return list
})

const maxRotationDegreesX = 60
const maxRotationDegreesY = 60
const perspectivePx = 600

onMounted(() => {
  if (props.folder === 'Crazy Frames') {
    const items = document.querySelectorAll('.crazy-frame')
    items.forEach(item => {
      const img = item.querySelector('img')
      item.addEventListener('mousemove', event => {
        const rect = item.getBoundingClientRect()
        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2
        const rotationY = (x * maxRotationDegreesX) / (rect.width / 2)
        const rotationX = (-y * maxRotationDegreesY) / (rect.height / 2)
        const transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg)`
        img.style.transform = transform
      })
      item.addEventListener('mouseleave', () => {
        img.style.transform = `perspective(${perspectivePx}px)`
      })
    })
  }
})

const lightboxOpen = ref(false)
const currentIndex = ref(0)

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

function apply3DEffect(img) {
  const handler = event => {
    const rect = img.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    const rotationY = (x * maxRotationDegreesX) / (rect.width / 2)
    const rotationX = (-y * maxRotationDegreesY) / (rect.height / 2)
    const transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg)`
    img.style.transform = transform
  }
  const reset = () => {
    img.style.transform = `perspective(${perspectivePx}px)`
  }
  img.addEventListener('mousemove', handler)
  img.addEventListener('mouseleave', reset)
}

watch(lightboxOpen, async val => {
  if (val && props.folder === 'Crazy Frames') {
    await nextTick()
    const img = document.querySelector('.lightbox-image')
    if (img) apply3DEffect(img)
  }
})
</script>

<style scoped>
.page {
  padding: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  display: block;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-image {
  max-width: 90%;
  max-height: 90%;
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  user-select: none;
}

.nav.prev {
  left: 1rem;
}

.nav.next {
  right: 1rem;
}

.crazy-frame {
  perspective: 600px;
}
</style>

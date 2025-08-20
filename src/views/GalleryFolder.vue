<template>
  <div class="page container fade-up">
    <h1>{{ folder }}</h1>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="{ 'crazy-frame': folder === 'Crazy Frames' }"
      >
        <img :src="image.src" :alt="image.alt" />
        <div class="overlay">
          <span>{{ image.caption }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
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

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.crazy-frame {
  perspective: 600px;
}
</style>

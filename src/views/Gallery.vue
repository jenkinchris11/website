<template>
  <div class="page container fade-up">
    <h1>Gallery</h1>
    <div
      v-for="(sectionImages, folder) in galleries"
      :key="folder"
      class="gallery-section"
    >
      <h2>{{ folder }}</h2>
      <div class="gallery-grid">
      <div
        v-for="(image, index) in sectionImages"
        :key="index"
        class="gallery-item"
        @click="openLightbox(folder, index)"
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
  </div>

  <div
    v-if="lightboxOpen"
    class="lightbox"
    @click.self="closeLightbox"
  >
    <button class="nav prev" @click.stop="prevImage">‹</button>
    <img
      :src="currentImages[currentIndex].src"
      :alt="currentImages[currentIndex].alt"
      class="lightbox-image"
    />
    <button class="nav next" @click.stop="nextImage">›</button>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const modules = import.meta.glob("../assets/Gallery/*/*.jpg", {
  eager: true,
  import: "default",
});
const galleries = {};

for (const [path, src] of Object.entries(modules)) {
  const parts = path.split("/");
  const folder = parts[parts.length - 2];
  const file = parts[parts.length - 1];
  const caption = file.replace(/\.[^/.]+$/, "");
  (galleries[folder] ||= []).push({ src, alt: caption, caption });
}

const lightboxOpen = ref(false)
const currentFolder = ref('')
const currentIndex = ref(0)

const currentImages = computed(() => galleries[currentFolder.value] || [])

function openLightbox(folder, index) {
  currentFolder.value = folder
  currentIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function prevImage() {
  const len = currentImages.value.length
  currentIndex.value = (currentIndex.value - 1 + len) % len
}

function nextImage() {
  const len = currentImages.value.length
  currentIndex.value = (currentIndex.value + 1) % len
}

function apply3DEffect(img) {
  const maxRotationDegreesX = 60
  const maxRotationDegreesY = 60
  const perspectivePx = 600
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
  if (val && currentFolder.value === 'Crazy Frames') {
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

.gallery-section {
  margin-bottom: 2rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.gallery-section h2 {
  margin-bottom: 1rem;
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
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.nav.next {
  right: 1rem;
}
</style>

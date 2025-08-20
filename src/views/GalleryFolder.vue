<template>
  <div class="page container fade-up">
    <h1>{{ folder }}</h1>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
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
import { computed } from 'vue'
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
</script>

<style scoped>
.page {
  padding: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.gallery-item img {
  width: 100%;
  display: block;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
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
  font-weight: <weight>;
  font-style: normal;
}

.gallery-item:hover .overlay {
  opacity: 1;
}
</style>

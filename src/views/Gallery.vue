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
        >
          <img :src="image.src" :alt="image.alt" />
          <div class="overlay">
            <span>{{ image.caption }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const modules = import.meta.glob("../assets/*/*.jpg", { eager: true });
const galleries = {};

for (const [path, src] of Object.entries(modules)) {
  const parts = path.split("/");
  const folder = parts[parts.length - 2];
  const file = parts[parts.length - 1];
  const caption = file.replace(/\.[^/.]+$/, "");
  (galleries[folder] ||= []).push({ src, alt: caption, caption });
}
</script>

<style scoped>
.page {
  padding: 1rem;
}

.gallery-section {
  margin-bottom: 2rem;
}

.gallery-section h2 {
  margin-bottom: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  display: block;
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
}

.gallery-item:hover .overlay {
  opacity: 1;
}
</style>

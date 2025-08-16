<template>
  <div class="page container fade-up">
    <h1>Gallery</h1>
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
const images = [
  {
    src: "https://via.placeholder.com/400x300",
    alt: "Placeholder 1",
    caption: "Caption 1",
  },
  {
    src: "https://via.placeholder.com/400x300",
    alt: "Placeholder 2",
    caption: "Caption 2",
  },
  {
    src: "https://via.placeholder.com/400x300",
    alt: "Placeholder 3",
    caption: "Caption 3",
  },
];
</script>

<style scoped>
.page {
  padding: 1rem;
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

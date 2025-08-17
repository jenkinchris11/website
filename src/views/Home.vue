<template>
  <section
    class="hero"
    :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }"
  >
    <div class="home fade-up">
      <h1 class="title">Andrew Jenkin Sculpture</h1>
      <p>{{ tagline }}</p>
    </div>
  </section>
</template>

<script setup>
const { imageUrl, tagline } = defineProps({
  imageUrl: {
    type: String,
    default: "",
  },
  tagline: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
}
.home {
  text-align: center;
}
.title {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>

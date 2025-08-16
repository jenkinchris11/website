<template>
  <section
    class="hero"
    :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }"
  >
    <div class="home">
      <h1 class="title">Welcome to My Website</h1>
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
    default: "Explore the sidebar to learn more.",
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

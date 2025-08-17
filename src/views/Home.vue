<template>
  <section class="hero">
    <video
      class="background-video"
      autoplay
      muted
      :loop="true"
      playsinline
      :src="backgroundVideo"
    ></video>
    <div class="home fade-up">
      <h1 class="title">Andrew Jenkin Sculpture</h1>
      <p>{{ tagline }}</p>
    </div>
  </section>
</template>

<script setup>
import backgroundVideo from "../assets/Video/A Certain Ratio.mp4";

const { tagline } = defineProps({
  tagline: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
.home {
  position: relative;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
.title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>

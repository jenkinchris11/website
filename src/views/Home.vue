<template>
  <section class="hero">
    <video-background
      :src="backgroundVideo"
      style="height: 100vh;"
    >
      <div class="overlay" />
      <div class="home fade-up">
        <h1 class="title">Andrew Jenkin Sculpture</h1>
        <p>{{ tagline }}</p>
        <div>
          <Slideshow />
        </div>
      </div>
    </video-background>
  </section>
</template>

<script setup>
import VideoBackground from "vue-responsive-video-background-player";
import backgroundVideo from "../assets/Video/A Certain Ratio.mp4";
import Slideshow from "../components/Slideshow.vue";

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
  position: absolute;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
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
  color: white;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  pointer-events: none;
}
</style>

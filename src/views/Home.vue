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
        <Slideshow v-if="!mdAndDown" />
      </div>
    </video-background>
  </section>
</template>

<script setup>
import VideoBackground from "vue-responsive-video-background-player";
import backgroundVideo from "../assets/Video/A Certain Ratio.mp4";
import Slideshow from "../components/Slideshow.vue";
import { useDisplay } from "vuetify";

const { tagline } = defineProps({
  tagline: {
    type: String,
    default: "",
  },
});

const { mdAndDown } = useDisplay();
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
.home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

@media (max-width: 600px) {
  .hero {
    padding: 0 1rem;
  }
  .home {
    width: 100%;
  }
}

@media (min-width: 601px) {
  .home {
    width: 60%;
  }
}

@media (min-width: 600px) {
  .title {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    color: white;
  }
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

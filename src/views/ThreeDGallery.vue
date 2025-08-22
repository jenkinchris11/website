<template>
  <section class="three-d-gallery">
    <h1>3D Gallery</h1>
    <iframe
      class="model-viewer"
      :src="viewerUrl"
      allow="camera; microphone; xr-spatial-tracking"
    ></iframe>
  </section>
</template>

<script setup>
const modelUrl = new URL('/assets/Splatter/scan.spz', window.location.origin).href;
const viewerUrl = `https://scaniverse.8thwall.app/model-viewer/?model=${encodeURIComponent(
  modelUrl
)}`
</script>

<style scoped>
.three-d-gallery {
  width: 100%;
  height: 100%;
}
.model-viewer {
  width: 100%;
  height: 80vh;
  border: none;
}
</style>

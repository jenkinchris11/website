<template>
  <section class="three-d-gallery">
    <h1>3D Gallery</h1>
    <iframe
      ref="viewerFrame"
      class="model-viewer"
      :src="viewerUrl"
      allow="camera; microphone; xr-spatial-tracking"
    ></iframe>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const viewerFrame = ref(null);
const modelUrl = new URL('/assets/Splatter/scan.spz', window.location.origin).href;
const viewerUrl = 'https://scaniverse.8thwall.app/model-viewer/';

onMounted(() => {
  const frame = viewerFrame.value;
  if (!frame) return;
  frame.addEventListener('load', () => {
    frame.contentWindow?.postMessage(
      { action: 'loadModel', url: modelUrl },
      'https://scaniverse.8thwall.app'
    );
  });
});
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

<template>
  <section class="three-d-gallery">
    <h1>3D Gallery</h1>
    <select v-model="currentFile">
      <option v-for="file in splatFiles" :key="file.value" :value="file.value">
        {{ file.label }}
      </option>
    </select>
    <iframe
      class="model-viewer"
      :src="viewerUrl"
      allow="camera; microphone; xr-spatial-tracking"
    ></iframe>
  </section>
</template>

<script setup>
const modelUrl = new URL('../assets/Splatter/scan.spz', import.meta.url).href
const viewerUrl = `https://scaniverse.8thwall.app/model-viewer/?model=${encodeURIComponent(
  modelUrl
)}`
import { ref, computed } from 'vue'

const splatFiles = [
  {
    label: 'Scan',
    value: new URL('../assets/Splatter/scan.spz', import.meta.url).href,
  }
]

const currentFile = ref(splatFiles[0].value)
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

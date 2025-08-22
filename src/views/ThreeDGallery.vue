<template>
  <section class="three-d-gallery">
    <h1>3D Gallery</h1>
    <select v-model="currentFile">
      <option v-for="file in splatFiles" :key="file.value" :value="file.value">
        {{ file.label }}
      </option>
    </select>
    <div v-if="loading">Loading splat...</div>
    <div v-else-if="error">{{ error }}</div>
    <pc-app
      v-else
      antialias="false"
      depth="false"
      high-resolution="false"
      stencil="false"
    >
      <pc-asset id="splat" :src="splat"></pc-asset>
      <pc-asset src="https://cdn.jsdelivr.net/npm/playcanvas@latest/scripts/esm/camera-controls.mjs"></pc-asset>
      <pc-scene>
        <pc-entity name="camera" position="0 0 3">
          <pc-camera></pc-camera>
          <pc-scripts>
            <pc-script name="cameraControls"></pc-script>
          </pc-scripts>
        </pc-entity>
        <pc-entity name="model">
          <pc-splat asset="splat"></pc-splat>
        </pc-entity>
      </pc-scene>
    </pc-app>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const splatFiles = [
  {
    label: 'Scan',
    value: new URL('../assets/Splatter/scan.spz', import.meta.url).href,
  },
  {
    label: 'Alternate',
    value: new URL('../assets/Splatter/alternate.spz', import.meta.url).href,
  },
]

const currentFile = ref(splatFiles[0].value)
const splat = ref('')
const loading = ref(false)
const error = ref('')

const loadSplat = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(currentFile.value)
    if (!res.ok) throw new Error('Failed to load')
    splat.value = currentFile.value
  } catch (e) {
    error.value = 'Failed to load selected splat.'
    splat.value = ''
  } finally {
    loading.value = false
  }
}

watch(currentFile, loadSplat)
onMounted(loadSplat)
</script>

<style scoped>
.three-d-gallery {
  width: 100%;
  height: 100%;
}
pc-app {
  width: 100%;
  height: 80vh;
  display: block;
}
</style>

<template>
  <section class="three-d-gallery">
    <h1>3D Gallery</h1>
    <pc-app antialias="false" depth="false" high-resolution="false" stencil="false">
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
import splatUrl from '../assets/Splatter/scan.spz?url'

const splat = splatUrl
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

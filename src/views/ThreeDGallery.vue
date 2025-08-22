<template>
  <section class="three-d-gallery">
    <h1>3D Gallery</h1>
    <canvas ref="canvas"></canvas>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Application, Entity, Color } from 'playcanvas'
import { createGSplatEntityFromSpzUrlAsync } from '@spz-loader/playcanvas'
import splatUrl from '../assets/Splatter/scan.spz?url'

const canvas = ref(null)

onMounted(async () => {
  const app = new Application(canvas.value, {
    graphicsDeviceOptions: { antialias: true }
  })
  app.start()

  const camera = new Entity('camera')
  camera.addComponent('camera', {
    clearColor: new Color(0.1, 0.1, 0.1)
  })
  camera.setPosition(0, 0, 3)
  app.root.addChild(camera)

  const spzEntity = await createGSplatEntityFromSpzUrlAsync(splatUrl)
  app.root.addChild(spzEntity)
})
</script>

<style scoped>
.three-d-gallery {
  width: 100%;
  height: 100%;
}
canvas {
  width: 100%;
  height: 80vh;
  display: block;
}
</style>

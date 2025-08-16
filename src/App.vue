<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div id="layout">
    <Sidebar />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style>
#layout {
  display: flex;
}
.content {
  margin-left: 200px;
  padding: 2rem;
  width: calc(100% - 200px);
  min-height: 100vh;
  box-sizing: border-box;
}
</style>

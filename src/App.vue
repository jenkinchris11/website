<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <v-app>
    <Sidebar />
    <v-main class="content">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
.content {
  padding: 2rem;
}
</style>

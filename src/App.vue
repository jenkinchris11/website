<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
  <v-app>
    <Sidebar />
    <v-main class="content">
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </v-main>
  </v-app>
</template>

<style>
.content {
  padding: 2rem;
}
</style>

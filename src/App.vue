<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
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

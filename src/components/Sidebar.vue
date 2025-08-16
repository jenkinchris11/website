<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="sidebar">
    <h2 class="logo">My Site</h2>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/gallery">Gallery</RouterLink>
    <RouterLink to="/social">Social</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: #2c3e50;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
}
.sidebar a {
  color: inherit;
  text-decoration: none;
}
.sidebar a.router-link-active {
  font-weight: bold;
}
.logo {
  margin-bottom: 2rem;
}
</style>

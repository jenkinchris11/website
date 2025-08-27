<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const { mdAndDown } = useDisplay()
const drawer = ref(!mdAndDown.value)
watch(mdAndDown, val => { drawer.value = !val })

const modules = import.meta.glob('../assets/Gallery/*/*.jpg')
const galleryFolders = Array.from(
  new Set(
    Object.keys(modules).map(path => {
      const parts = path.split('/')
      return parts[parts.length - 2]
    })
  )
).sort()
</script>

<template>
  <v-app-bar
    v-if="mdAndDown"
    flat
    class="mobile-bar"
    :class="{ 'home-nav': isHome }"
    app
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>Andrew Jenkin Sculpture</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="!mdAndDown"
    :temporary="mdAndDown"
    class="sidebar"
    elevation="0"
    :class="{ 'home-nav': isHome }"
    app
  >
    <v-list>
      <v-list-item title="Andrew Jenkin Sculpture" class="text-h3" style="font-size: 1.2rem;"></v-list-item>
      <v-list-item to="/" title="Home"></v-list-item>
      <v-list-item to="/about" title="About"></v-list-item>
      <v-list-group>
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Gallery"></v-list-item>
        </template>
        <v-list-item to="/gallery" title="All"></v-list-item>
        <v-list-item
          v-for="folder in galleryFolders"
          :key="folder"
          :to="`/gallery/${encodeURIComponent(folder)}`"
          :title="folder"
        ></v-list-item>
      </v-list-group>
      <v-list-item to="/social" title="Social"></v-list-item>
      <v-list-item to="/contact" title="Contact"></v-list-item>
      <div class="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
        >
          <v-btn icon>
            <img
              src="https://i.ibb.co/Wv8VHtQZ/5296499-fb-facebook-facebook-logo-icon.png"
              alt="Facebook"
            />
          </v-btn>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener"
        >
          <v-btn icon>
            <img
              src="https://i.ibb.co/1f73cjXs/5296501-linkedin-network-linkedin-logo-icon.png"
              alt="LinkedIn"
            />
          </v-btn>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
        >
          <v-btn icon>
            <img
              src="https://i.ibb.co/nsKLnB9F/5296765-camera-instagram-instagram-logo-icon.png"
              alt="Instagram"
            />
          </v-btn>
        </a>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-list-item-title{
font-size: 1.2rem;
}
.sidebar {
  background-color: #f9f9f9;
  border: none;
  font-weight: 300;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.mobile-bar {
  background-color: #f9f9f9;
  font-family: "Playfair Display", serif;
}

.home-nav {
  background-color: #000 !important;
  color: #fff !important;
}

.home-nav :deep(.v-list-item-title),
.home-nav :deep(.v-list-item),
.home-nav :deep(.v-toolbar-title),
.home-nav :deep(.v-btn) {
  color: #fff !important;
}

.home-nav :deep(.v-list-item:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.sidebar :deep(.v-list-item) {
  margin: 0.25rem 0;
  padding: 0.25rem 0.5rem;
  font-weight: 300;
  background: transparent;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.sidebar :deep(.v-list-item:hover) {
  background-color: rgba(0, 0, 0, 0.04);
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.social-links img {
  width: 24px;
  height: 24px;
}

</style>

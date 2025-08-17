<script setup>
</script>

<template>
  <v-navigation-drawer permanent class="sidebar" elevation="0">
    <v-list>
      <v-list-item title="Andrew Jenkin Sculpture" class="text-h3" style="font-size: 1.2rem;"></v-list-item>
      <v-list-item to="/" title="Home"></v-list-item>
      <v-list-item to="/about" title="About"></v-list-item>
      <v-list-item to="/gallery" title="Gallery"></v-list-item>
      <v-list-item to="/social" title="Social"></v-list-item>
      <v-list-item to="/contact" title="Contact"></v-list-item>
      <v-list-item to="/projects" title="Projects"></v-list-item>
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
  font-weight: <weight>;
  font-style: normal;
}

.sidebar :deep(.v-list-item) {
  margin: 0.25rem 0;
  padding: 0.25rem 0.5rem;
  font-weight: 300;
  background: transparent;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.sidebar :deep(.v-list-item:hover) {
  background-color: rgba(0, 0, 0, 0.04);
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

</style>

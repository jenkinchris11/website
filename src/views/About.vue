<template>
  <div class="page fade-up">
    <div class="about-grid">
  <div class="page container fade-up">
    <div class="about-grid">
    <div class="about-content">
      <img class="about-image" :src="aboutPic" alt="Andrew Jenkin" />
      <div class="about-text">
        <h1>About Me</h1>
        <h2>Andrew Jenkin</h2>
        <p>I am an artist primarily occupied with physical sculptural work and have been constructing and fabricating for many years, due to my background in engineering. This has instilled me with many practical skills that I now apply in a more creative capacity.
          I choose to work in a wide range of mediums to maximise a diverse variety of works, and I have a vast knowledge of the best applications of materials for designs.
          My recent work draws heavily on Geometry and Mathematics. Particularly Polygons, Polyhedra and sacred geometry, all of which have complex mathematical connotations.
          Having spent many years constructing objects from plans, patterns and templates, I have developed a passion of applying these processes to my own creative endeavours.
          Over the last two years of my formal art training I have spent time with the much-acclaimed art sculptor Charles Hadcock, assisting him in his studio allowed me a privileged insight in the practice of a professional sculptor.
          Which has served to give me a desire to create larger scale works and a thirst to acquire commissions for public art sculpture.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import aboutPic from '../assets/About/AboutPic.jpg'
</script>

<style scoped>
.page {
  margin-left: -2rem;
  padding: 1rem 2rem 1rem 0;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
.about-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4rem;
  column-gap: 1rem;
}
.about-content {
  display: flex;
  align-items: flex-start;
}
.about-image {
  max-width: 300px;
  max-width: 200px;
  margin-right: 1rem;
}
</style>

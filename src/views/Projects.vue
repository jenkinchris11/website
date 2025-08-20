<template>
  <div class="page container fade-up">
    <h1>Projects</h1>
    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <img :src="project.image" :alt="project.title" />
        <h2>{{ project.title }}</h2>
      </article>
    </div>
  </div>
</template>

<script setup>
// Import all images from project folders and use the first image of each
// folder as the card preview image.
const modules = import.meta.glob(
  "../assets/Projects/*/*.{jpg,jpeg,JPG,JPEG,png,PNG}",
  {
    eager: true,
    import: "default",
  }
);

const projectMap = {};
for (const [path, src] of Object.entries(modules)) {
  const parts = path.split("/");
  const folder = parts[parts.length - 2];
  (projectMap[folder] ||= []).push(src);
}

const projects = Object.entries(projectMap).map(([title, images]) => ({
  title,
  image: images[0],
}));
</script>

<style scoped>
.page {
  padding: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.project-card {
  background: #fff;
  border: 1px solid #eee;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.project-card img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 0.5rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>

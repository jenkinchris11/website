import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import GalleryFolder from '../views/GalleryFolder.vue'
import Social from '../views/Social.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import ThreeDGallery from '../views/ThreeDGallery.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/gallery', name: 'gallery', component: Gallery },
  {
    path: '/gallery/:folder',
    name: 'gallery-folder',
    component: GalleryFolder,
    props: true,
  },
  { path: '/3d-gallery', name: '3d-gallery', component: ThreeDGallery },
  { path: '/social', name: 'social', component: Social },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/projects', name: 'projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

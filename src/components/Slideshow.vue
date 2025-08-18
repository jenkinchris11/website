<template>
  <div>
    <div class="slideshow-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Projects from '../views/Projects.vue'
import Gallery from '../views/Gallery.vue'
import projectImg from '../assets/Projects/Project 1/_MG_9575.JPG'
import galleryImg from '../assets/Gallery/Aether/1.jpg'

const slideData = [
  {
    image: projectImg,
    headline: 'Featured Projects',
    description: 'Highlights from my project portfolio.',
    clickableAreas: [
      { top: '5%', left: '10%', width: '80%', height: '90%', href: '#projects', text: 'Projects' }
    ]
  },
  {
    image: galleryImg,
    headline: 'Gallery Showcase',
    description: 'Browse the artwork gallery.',
    clickableAreas: [
      { top: '5%', left: '10%', width: '80%', height: '90%', href: '#gallery', text: 'Gallery' }
    ]
  }
]

onMounted(() => {
  const gsap = window.gsap
  const slideshowContainer = document.querySelector('.slideshow-container')
  let currentIndex = 0

  function createSlides () {
    slideData.forEach((data) => {
      const slide = document.createElement('div')
      slide.className = 'slide'
      slide.style.visibility = 'hidden'
      slide.innerHTML = `
        <div class="slide-image-wrapper">
          <img src="${data.image}" class="slide-image" alt="${data.headline}">
          ${data.clickableAreas.map((area) => `
            <a href="${area.href}" class="clickable-area"
               data-label="${area.text}"
               style="top:${area.top}; left:${area.left}; width:${area.width}; height:${area.height};">
              <span>${area.text}</span>
            </a>
          `).join('')}
        </div>
        <div class="slide-content">
          <h1>${data.headline}</h1>
          <p>${data.description}</p>
        </div>
      `
      slideshowContainer.appendChild(slide)
    })
  }

  function goToSlide (index) {
    const slides = document.querySelectorAll('.slide')
    if (gsap.isTweening(slides)) return

    const outgoingSlide = slides[currentIndex]
    const incomingSlide = slides[index]
    currentIndex = index

    const tl = gsap.timeline()
    tl.to(outgoingSlide, { autoAlpha: 0, y: -100, duration: 0.8, ease: 'power3.in' })
      .set(outgoingSlide, { y: 100, visibility: 'hidden' })
      .set(incomingSlide, { visibility: 'visible' })
      .fromTo(incomingSlide,
        { autoAlpha: 0, y: 100, scale: 0.9 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      )
      .from(incomingSlide.querySelectorAll('.slide-content > *'), {
        autoAlpha: 0, y: 50, stagger: 0.2, duration: 0.8, ease: 'back.out(1.7)'
      }, '-=0.5')
  }

  document.getElementById('next-btn').addEventListener('click', () => {
    goToSlide((currentIndex + 1) % slideData.length)
  })

  document.getElementById('prev-btn').addEventListener('click', () => {
    goToSlide((currentIndex - 1 + slideData.length) % slideData.length)
  })

  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark')
  })

  const scrollTopBtn = document.getElementById('scrollTopBtn')
  window.onscroll = () => {
    scrollTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
      ? 'flex' : 'none'
  }
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })

  document.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return
    const anchor = e.target.closest('a[href^="#"]')
    if (!anchor) return
    const targetId = anchor.getAttribute('href')
    const targetElement = document.querySelector(targetId)
    if (targetElement && targetElement.classList.contains('content-section')) {
      e.preventDefault()
      document.querySelectorAll('.content-section').forEach(el => {
        el.classList.remove('active')
      })
      targetElement.classList.add('active')
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 50)
    }
  })

  createSlides()
  goToSlide(0)

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % slideData.length
    goToSlide(nextIndex)
  }, 15000)
})
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@500;700&family=Poppins:wght@400;500;700&display=swap');

:root {
    --bg-light: #f0f4f8;
    --text-light: #1e293b;
    --card-bg-light: #ffffff;
    --accent-light: #034694;
    --bg-dark: #050A1A;
    --text-dark: #e2e8f0;
    --card-bg-dark: #1e293b;
    --accent-dark: #00D8FF;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-light);
    color: var(--text-light);
    transition: background-color 0.5s ease, color 0.5s ease;
    margin: 0;
}

body.dark {
    background-color: var(--bg-dark);
    color: var(--text-dark);
}

.slideshow-container {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    justify-content: space-around;
}

.slide {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    align-items: center;
    position: absolute;
    visibility: hidden;
}

@media (min-width: 768px) {
    .slide {
        flex-direction: row;
    }
}

.slide-content {
    background-color: var(--card-bg-light);
    padding: 2rem;
    color: rgba(0, 0, 0, 1);
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition: background-color 0.5s ease;
    width: 100%;
}

body.dark .slide-content {
    background-color: var(--card-bg-dark);
}

.slide-content h1 {
    font-family: 'Teko', sans-serif;
    font-size: 2.5rem;
    line-height: 1.2;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 1rem;
    transition: color 0.5s ease;
}

body.dark .slide-content h1 {
    color: var(--accent-dark);
}

.slide-image-wrapper {
    position: relative;
    perspective: 1000px;
    width: 100%;
}

.slide-image {
    width: 100%;
    height: auto;
    max-height: 60vh;
    object-fit: cover;
    border-radius: 1rem;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
}

.slide-image-wrapper:hover .slide-image {
    transform: rotateY(10deg) rotateX(5deg) scale(1.05);
}

.clickable-area {
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease, backdrop-filter 0.3s ease;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-color: white;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 0;
    border-radius: 0.5rem;
    cursor: pointer;
}

.slide-image-wrapper:hover .clickable-area {
    opacity: 1;
    backdrop-filter: blur(5px);
}

.clickable-area:hover {
    background: rgba(0, 0, 0, 0.3);
}

.controls {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: var(--card-bg-light);
    padding: 0.5rem 1.5rem;
    border-radius: 999px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.5s ease;
    z-index: 10;
    margin-bottom: -94px;
}

body.dark .controls {
    background: var(--card-bg-dark);
}

.nav-btn {
    font-size: 1.5rem;
    color: var(--text-light);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.5s ease, transform 0.2s ease;
}

body.dark .nav-btn {
    color: var(--text-dark);
}

.nav-btn:hover {
    color: var(--accent-light);
    transform: scale(1.2);
}

body.dark .nav-btn:hover {
    color: var(--accent-dark);
}

#theme-toggle .fa-sun {
    display: none;
}

body.dark #theme-toggle .fa-sun {
    display: inline-block;
}

body.dark #theme-toggle .fa-moon {
    display: none;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 1.5rem auto;
    padding: 0.75rem 1.5rem;
    width: fit-content;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.5s ease;
}

body.dark .social-links {
    background-color: rgba(30, 41, 59, 0.8);
}

.social-links a {
    font-size: 1.5rem;
    color: var(--text-light);
    transition: color 0.3s ease, transform 0.3s ease;
}

body.dark .social-links a {
    color: var(--text-dark);
}

.social-links a:hover {
    color: var(--accent-light);
    transform: scale(1.2);
}

body.dark .social-links a:hover {
    color: var(--accent-dark);
}

.content-section {
    min-height: 90vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    scroll-margin-top: 2rem;
}

#scrollTopBtn {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: var(--accent-light);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    font-size: 18px;
    width: 50px;
    height: 50px;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, opacity 0.3s, transform 0.3s;
}

body.dark #scrollTopBtn {
    background-color: var(--accent-dark);
    color: var(--bg-dark);
}

#scrollTopBtn:hover {
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .content-section {
        display: none;
        margin: 1rem 0.5rem;
        min-height: 50vh;
        background-attachment: scroll;
        background-size: cover;
        background-position: center;
    }

    .content-section.active {
        display: block;
    }

    .slideshow-container{
        margin-bottom: 10px;
    }
}
</style>

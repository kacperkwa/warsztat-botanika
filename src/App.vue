<template>
  <div class="app">
    <HomePage></HomePage>
    <main>
      <AboutMe></AboutMe>
      <MyProjects></MyProjects>
      <OfferPage></OfferPage>
      <FirstStep></FirstStep>
      <CookiesBanner></CookiesBanner>
    </main>
    <ContactPage></ContactPage>
  </div>
</template>
<script setup>
import HomePage from '@/components/layout/HomePage.vue'
import AboutMe from '@/components/layout/AboutMe.vue'
import MyProjects from '@/components/layout/MyProjects.vue'
import ContactPage from '@/components/layout/ContactPage.vue'
import OfferPage from '@/components/layout/OfferPage.vue'
import FirstStep from './components/layout/FirstStep.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import CookiesBanner from './components/policy/CookiesBanner.vue'

const updateURL = (sectionId) => {
  const currentURL = window.location.pathname
  const newURL = `${currentURL}#${sectionId}`
  history.pushState(null, null, newURL)
}

onMounted(() => {
  const sections = document.querySelectorAll('section, header, footer')

  const options = {
    root: null,
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.className === 'offer-container') {
          updateURL('oferta')
        } else if (entry.target.id) {
          updateURL(entry.target.id)
        }
      }
    })
  }, options)

  sections.forEach((section) => {
    observer.observe(section)
  })

  onBeforeUnmount(() => {
    sections.forEach((section) => {
      observer.unobserve(section)
    })
  })
})
</script>

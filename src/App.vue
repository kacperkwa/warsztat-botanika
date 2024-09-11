<template>
  <div class="app">
    <HomePage></HomePage>
    <main>
      <AboutMe></AboutMe>
      <MyProjects></MyProjects>
      <OfferPage></OfferPage>
      <ContactPage></ContactPage>
    </main>
  </div>
</template>
<script setup>
import HomePage from '@/components/layout/HomePage.vue'
import AboutMe from '@/components/layout/AboutMe.vue'
import MyProjects from '@/components/layout/MyProjects.vue'
import ContactPage from '@/components/layout/ContactPage.vue'
import OfferPage from '@/components/layout/OfferPage.vue'
</script>

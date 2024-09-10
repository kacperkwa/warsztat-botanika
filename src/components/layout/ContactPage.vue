<template>
  <section id="contact">
    <div class="container">
      <h2>zaprojektuj swój ogród ze mną</h2>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.546905586674!2d20.05764061263995!3d49.98235512083753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164162e86d0655%3A0xefdeb323e2dc59c9!2sRynek%20G%C3%B3rny!5e0!3m2!1spl!2spl!4v1725021755982!5m2!1spl!2spl"
          width="350"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <SectionFooter></SectionFooter>
  </section>
</template>
<script setup>
import SectionFooter from '@/components/UI/SectionFooter.vue'
</script>
<style scoped>
#contact {
  background-color: var(--background-color-secondary);
  padding: 2rem 0;
  color: var(--text-color-secondary);
}
iframe {
  border: 10px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
</style>

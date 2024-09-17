<template>
  <section id="contact">
    <div class="container">
      <h2>Zaprojektuj swój ogród ze mną</h2>
      <div class="content-container">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.546905586674!2d20.05764061263995!3d49.98235512083753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164162e86d0655%3A0xefdeb323e2dc59c9!2sRynek%20G%C3%B3rny!5e0!3m2!1spl!2spl!4v1725021755982!5m2!1spl!2spl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="contact-container">
          <p>po szczegóły oferty zapraszam do kontaktu:</p>
          <ul class="contact-list">
            <li class="contant-mail">
              <i class="fa-solid fa-envelope"></i>
              <p>warsztatbotanika@gmail.com</p>
            </li>
            <li class="contact-phone">
              <i class="fa-solid fa-phone"></i>
              <p>+48 532 808 858</p>
            </li>
            <li class="contact-fb">
              <i class="fa-brands fa-facebook-f"></i
              ><a href="https://www.facebook.com" target="_blank">facebook/warsztabotanika</a>
            </li>
            <li class="ccontact-location">
              <i class="fa-solid fa-location-dot"></i>
              <p>Wieliczka i&nbsp;Rzeszów, małopolska i&nbsp;podkarpacie, cała Polska - zdalnie</p>
            </li>
          </ul>
        </div>
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
  color: var(--text-color-secondary);
}

.content-container {
  display: flex;
  gap: 4rem;
  justify-content: center;
  width: 100%;
}
.contact-container {
  width: 100%;
}
.contact-container > p {
  font-size: calc(1.4em + 0.4vw);
  text-transform: uppercase;
  padding-bottom: 3rem;
  letter-spacing: 0.1rem;
  font-weight: 300;
}
li {
  font-size: calc(1.4rem + 0.3vw);
  display: flex;
  gap: 1.5rem;
  align-items: center;
  letter-spacing: 0.2rem;
}
li p,
li a {
  font-weight: 200;
}

li a {
  text-decoration: none;
  color: var(--text-color-secondary);
}
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.map-container {
  width: 100%;
}
iframe {
  border: 10px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 100%;
  height: 500px;
}
@media (max-width: 1050px) {
  .content-container {
    flex-direction: column-reverse;
  }
  .contact-container {
    width: 100%;
  }
}
</style>

<template>
  <section id="aboutme" class="section-container">
    <div class="container">
      <h2 class="section-header">kim jestem</h2>
      <div class="content-container">
        <p>
          <span
            >Przez 4 lata pracowałam w biurze projektowym działającym głównie na terenie
            małopolski.</span
          >
          <span
            >Teraz zakładam własną firmę. Style w jakich najczęściej projektuję to
            nowoczesny/modernistyczny, leśny, naturalistyczny.</span
          >
          <span
            >Priorytetem w moich projektach jest stworzenie przestrzeni do wypoczynku i realne
            możliwości wykonania, przy zachowaniu estetyki. /z dbałością o estetykę.</span
          >
          <span>Lubię kolor CZARNY, połączenie drewna i betonu, oraz tajemnicze zakątki..</span>
        </p>
        <div class="image-container">
          <img
            class="aboutme-img"
            src="../../assets/img/aboutme-image.webp"
            alt="About me image,"
          />
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
#aboutme {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 2rem 6rem 2rem;
  background-color: var(--background-color-secondary);
  color: var(--text-color-secondary);
  position: relative;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 1200px;
}
.content-container {
  display: flex;
  width: 100%;
  padding: 2rem;
}
h2 {
  text-transform: uppercase;
  font-size: calc(2rem + 1vw);
}
p {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: calc(1rem + 0.5vw);
  line-height: 2.4rem;
}
.image-container {
  width: 100%;
  height: 100%;
  max-width: 500px;
}
.aboutme-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
@media (max-width: 768px) {
  .container {
    justify-content: center;
  }
  .text-container {
    padding: 1rem;
    width: 100%;
  }
  .image-container {
    width: 100%;
  }
  h2 {
    margin-bottom: 2.5rem;
  }
  p {
    line-height: 2rem;
    gap: 1rem;
  }
}
</style>

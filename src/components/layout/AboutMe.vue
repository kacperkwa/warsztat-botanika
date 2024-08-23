<template>
  <section id="aboutme">
    <div class="container">
      <div class="text-container">
        <h2>kim jestem</h2>
        <p>
          <span
            >Przez 4 lata pracowałam w biurze projektowym działającym głównie na terenie
            małopolski.</span
          >
          <span
            >Teraz zakładam własną firmę. Style w jakich najczęściej projektuję to
            nowoczesny/modernistyczny, leśny, naturalistyczny.</span
          >
          <span>
            Priorytetem w moich projektach jest stworzenie przestrzeni do wypoczynku i realne
            możliwości wykonania, przy zachowaniu estetyki. /z dbałością o estetykę.</span
          >
          <span>Lubię kolor CZARNY, połączenie drewna i betonu, oraz tajemnicze zakątki..</span>
        </p>
      </div>
      <div class="image-container">
        <img class="aboutme-img" src="../../assets/img/aboutme-image.webp" alt="About me image," />
      </div>
    </div>
  </section>
  <SectionFooter></SectionFooter>
</template>
<script setup>
import SectionFooter from '@/components/UI/SectionFooter.vue'
</script>
<style scoped>
#aboutme {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color-secondary);
  color: var(--text-color-secondary);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.text-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
}
h2 {
  text-transform: uppercase;
  font-size: 5rem;
  margin-bottom: 2rem;
}
p {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
}
.image-container {
  width: 100%;
  max-width: 500px;
}
</style>

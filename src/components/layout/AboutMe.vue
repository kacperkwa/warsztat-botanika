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
    <SectionFooter></SectionFooter>
  </section>
</template>
<script setup>
import SectionFooter from '@/components/UI/SectionFooter.vue'
</script>
<style scoped>
#aboutme {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 6rem 2rem;
  height: 100vh;
  background-color: var(--background-color-secondary);
  color: var(--text-color-secondary);
  position: relative;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}
.text-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
}
h2 {
  text-transform: uppercase;
  font-size: calc(2.8rem + 1vw);
  margin-bottom: 2rem;
}
p {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: calc(1.2rem + 0.5vw);
  line-height: 2.4rem;
}
.image-container {
  width: 100%;
  max-width: 500px;
}
@media (max-width: 768px) {
  #aboutme {
    flex-direction: column;
    height: 100vh;
  }
  .container {
    flex-direction: column;
    gap: 2rem;
  }
  .text-container {
    padding: 1rem;
  }
  h2 {
    font-size: calc(2rem + 1vw);
  }
  p {
    font-size: calc(1rem + 0.5vw);
    line-height: 2rem;
    gap: 1rem;
  }
}
</style>

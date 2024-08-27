<template>
  <section id="aboutme">
    <div class="container">
      <h2>kim jestem</h2>
      <div class="content-container">
        <div class="text-container">
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
  background-color: var(--background-color-secondary);
  color: var(--text-color-secondary);
}
.content-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.text-container {
  display: flex;
  max-width: 40%;
}
.text-container p {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  font-size: calc(1rem + 0.5vw);
}
.image-container {
  display: flex;
  justify-content: center;
  max-width: 550px;
}
@media (max-width: 868px) {
  .content-container {
    flex-direction: column;
  }
  .text-container {
    min-width: 100%;
    max-width: 500px;
  }
  .text-container p {
    gap: 2rem;
  }
  .image-container {
    width: 100%;
  }
}
</style>

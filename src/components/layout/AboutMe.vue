<template>
  <section id="aboutme">
    <div class="container">
      <h2>kim jestem</h2>
      <div class="content-container">
        <div class="text-container">
          <p>
            <span
              >Całe dzieciństwo spędziłam w przekonaniu, że każde drzewo z igłami to choinka, a
              teraz choinkę ubieram tylko na Boże Narodzenie. Po ukończeniu studiów magisterskich z
              tytułem architekta krajobrazu, przez 4 lata pracowałam w biurze projektowym w
              Krakowie, działającym głównie na terenie województwa małopolskiego.<br />
              Obecnie poświęcam się rozwinięciu własnej firmy i tworzeniu nowych, ciekawych
              projektów.</span
            >
            <span
              >Priorytetem w mojej pracy architekta krajobrazu jest stworzenie przestrzeni do
              wypoczynku i realne możliwości wykonania, ze szczególną dbałością o estetykę.<br />
              Zamiana niezagospodarowanego lub nieestetycznego otoczenia i stworzenie ogrodu, w
              którym czujemy się dobrze to mój cel. Bardzo lubię to co robię.</span
            >
            <span
              >Style w jakich najczęściej projektuję to nowoczesny minimalistyczny, leśny,
              naturalistyczny.<br />
              Lubię ogrody biało-zielone, kolor czarny, połączenie drewna i betonu, oraz tajemnicze
              zakątki w ogrodzie..</span
            >
          </p>
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
  scroll-snap-align: start;
}
.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.text-container {
  display: flex;
  max-width: 70%;
}
.text-container p {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  font-size: calc(1rem + 0.5vw);
  letter-spacing: 0.2rem;
  text-align: justify;
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

<template>
  <section id="o-mnie">
    <div class="container">
      <h2>kim jestem</h2>
      <div class="content-container">
        <div class="text-container">
          <p>
            <span
              >Całe dzieciństwo spędziłam w&nbsp;przekonaniu, że&nbsp;każde drzewo iglaste
              to&nbsp;choinka, a&nbsp;teraz choinkę ubieram tylko na&nbsp;Boże&nbsp;Narodzenie.
              Po&nbsp;ukończeniu studiów magisterskich z&nbsp;tytułem architekta krajobrazu, przez
              4&nbsp;lata pracowałam w&nbsp;biurze projektowym w&nbsp;Krakowie, działającym głównie
              na&nbsp;terenie województwa małopolskiego.<br />
              Obecnie poświęcam się rozwinięciu własnej firmy i&nbsp;tworzeniu nowych, ciekawych
              projektów.</span
            >
            <span
              >Priorytetem w&nbsp;mojej pracy architekta krajobrazu jest stworzenie przestrzeni
              do&nbsp;wypoczynku i&nbsp;realne możliwości wykonania, ze&nbsp;szczególną dbałością
              o&nbsp;estetykę. Podczas mojej dotychczasowej pracy nauczyłam się, jak ważne jest
              dokładne zrozumienie potrzeb klienta i&nbsp;dostosowanie projektu do&nbsp;jego
              wizji.<br />
              Zamiana niezagospodarowanego lub&nbsp;nieestetycznego otoczenia i&nbsp;stworzenie
              ogrodu, w&nbsp;którym czujemy się dobrze to&nbsp;mój cel. Bardzo lubię
              to&nbsp;co&nbsp;robię.</span
            >
            <span
              >Style w&nbsp;jakich najczęściej projektuję to&nbsp;nowoczesny minimalistyczny, leśny,
              naturalistyczny.<br />
              Lubię ogrody biało-zielone, kolor czarny, połączenie drewna i&nbsp;betonu,
              oraz&nbsp;tajemnicze zakątki w&nbsp;ogrodzie..</span
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
#o-mnie {
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
  height: 100%;
}
.text-container {
  display: flex;
  max-width: 70%;
}
.text-container p {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  font-size: calc(1.1rem + 0.5vw);
  letter-spacing: 0.1rem;
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

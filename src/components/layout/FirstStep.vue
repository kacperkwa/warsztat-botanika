<template>
  <section id="pierwszy-krok">
    <div class="container">
      <h2>pierwszy krok</h2>
      <div class="content-container">
        <p>
          Aby ułatwić i&nbsp;przyspieszyć proces projektowy, stworzyłam specjalną ankietę. Dzięki
          niej mogę dokładnie poznać Twoje oczekiwania i&nbsp;potrzeby dotyczące projektu ogrodu.
          Ankieta pozwala zebrać wszystkie istotne informacje, a&nbsp;także umożliwia przesłanie
          inspiracji&nbsp;oraz własnych materiałów.<br />
          Zachęcam do&nbsp;wypełnienia ankiety, abyśmy mogli wspólnie rozpocząć pracę nad Twoim
          wymarzonym ogrodem.
        </p>
        <a href=" https://forms.gle/N85q9rJS2SYfoQvHA" target="_blank">Przejdź do ankiety!</a>
      </div>
    </div>
    <SectionFooter />
  </section>
</template>
<script setup>
import SectionFooter from '@/components/UI/SectionFooter.vue'
</script>
<style scoped>
#pierwszy-krok {
  background-color: var(--background-color-primary);
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 8rem;
}
.content-container p {
  text-align: justify;
  font-size: calc(1.1rem + 0.5vw);
  letter-spacing: 0.2rem;
  font-weight: 300;
}
.content-container a {
  font-size: calc(1rem + 0.5vw);
  background-color: var(--button-color);
  color: var(--text-color-secondary);
  padding: 2rem 3rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 500;
}
.content-container a:hover {
  background-color: var(--button-hover-color);
  scale: 1.1;
}
</style>

<template>
  <header>
    <div class="header-top">
      <div class="container">
        <BurgerMenu></BurgerMenu>
        <h1>warsztat botanika</h1>
        <a href="#kontakt">kontakt</a>
      </div>
      <hr />
    </div>
    <main>
      <NavigationMenu></NavigationMenu>
      <div class="header-title">
        <h2>Rozpocznij projektowanie</h2>
        <p>i odpocznij w swoim ogrodzie</p>
      </div>
      <div class="header-img"></div>
    </main>
    <hr />
  </header>
</template>
<script setup>
import BurgerMenu from '@/components/UI/BurgerMenu.vue'
import NavigationMenu from '@/components/layout/NavigationMenu.vue'
</script>
<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
  padding: 1rem 2rem;
}
.header-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50px;
  max-width: 1200px;
  margin-bottom: 4rem;
}
.header-top .container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}
.header-top h1 {
  font-size: 1.6rem;
  font-weight: bold;
}

.header-top a {
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--text-color-primary);
  cursor: pointer;
}
.header-top menu {
  display: flex;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
}
hr {
  width: 100%;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  height: 100%;
  max-width: 1200px;
}
.header-title h2 {
  font-size: calc(2.5rem + 1vw);
  width: 50%;
}
.header-img {
  height: 60%;
  width: 100%;
  background-color: #000;
}
</style>

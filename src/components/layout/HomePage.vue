<template>
  <header>
    <div class="header-top">
      <div class="container">
        <BurgerMenu v-if="!isWideScreen" @click="toggleNav"></BurgerMenu>
        <h1>warsztat botanika</h1>
        <nav v-if="isWideScreen">
          <ul>
            <li><a href="">kim jestem</a></li>
            <li><a href="">projekty</a></li>
            <li><a href="">oferta</a></li>
            <li><a href="">pierwszy krok</a></li>
          </ul>
        </nav>
        <a href="#kontakt">kontakt</a>
      </div>
      <hr />
    </div>
    <main>
      <NavigationMenuMobile v-if="isMenuOpen"></NavigationMenuMobile>
      <div class="header-title">
        <h2>Rozpocznij projektowanie</h2>
        <p>i odpocznij w swoim ogrodzie</p>
      </div>
      <div>
        <img
          class="header-img"
          src="../../assets/img/header-img.jpg"
          alt="Header image, place to rest in your garden."
        />
      </div>
    </main>
    <hr />
  </header>
</template>
<script setup>
import BurgerMenu from '@/components/UI/BurgerMenu.vue'
import NavigationMenuMobile from '@/components/layout/NavigationMenuMobile.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavStore } from '@/stores/nav.js'
const navStore = useNavStore()

const isWideScreen = ref(false)

const toggleNav = () => {
  navStore.toggleNavMenu()
  console.log('asd')
}
const checkScreenWidth = () => {
  isWideScreen.value = window.matchMedia('(min-width: 768px)').matches
}

onMounted(() => {
  checkScreenWidth()
  window.addEventListener('resize', checkScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenWidth)
})
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
nav ul {
  display: flex;
  gap: 3rem;
}
nav ul li {
  padding: 0 3rem 0 0;
  border-right: 1px solid var(--text-color-primary);
}
nav ul li:last-child {
  border-right: none;
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
  padding: 1rem;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

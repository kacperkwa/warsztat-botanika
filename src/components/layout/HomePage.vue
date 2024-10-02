<template>
  <header id="home">
    <div class="header-top" ref="mainNav">
      <div class="container">
        <BurgerMenu v-if="!isWideScreen" @click="toggleNav"></BurgerMenu>
        <div class="main-header">
          <h1>warsztat botanika</h1>
          <p>pracownia projektowa</p>
        </div>
        <nav v-if="isWideScreen">
          <ul>
            <li><a href="#o-mnie">kim jestem</a></li>
            <li><a href="#projekty">projekty</a></li>
            <li><a href="#oferta">oferta</a></li>
            <li><a href="#pierwszy-krok">pierwszy krok</a></li>
            <li><a href="#cennik">cennik</a></li>
            <li><a href="#kontakt">kontakt</a></li>
          </ul>
        </nav>
      </div>
      <hr />
    </div>
    <div class="header-content">
      <NavigationMenuMobile v-if="isMenuOpen" @closeMenu="toggleNav"></NavigationMenuMobile>
      <div class="header-text">
        <img
          class="logo"
          src="../../assets/img/warsztatbotanika-logo.png"
          alt="logo-warsztat-botanika"
        />
        <div class="header-text-container">
          <h2>rozpocznij ze&nbsp;mną projektowanie już dziś</h2>
          <p>i&nbsp;odpocznij w&nbsp;swoim ogrodzie..</p>
        </div>
      </div>
      <div class="header-image-container">
        <img
          class="header-img"
          src="../../assets/img/header-img.jpg"
          alt="Obraz przedstawiający ogród z hamakiem."
        />
      </div>
    </div>
    <div v-if="showBurgerMenu" class="burger-menu-fixed" @click="toggleNav">
      <BurgerMenu />
    </div>
    <hr />
  </header>
</template>
<script setup>
import BurgerMenu from '@/components/UI/BurgerMenu.vue'
import NavigationMenuMobile from '@/components/layout/NavigationMenuMobile.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavStore } from '@/stores/nav.js'

const navStore = useNavStore()
const isMenuOpen = ref(false)
const isWideScreen = ref(false)
const showBurgerMenu = ref(false)
const mainNav = ref(null)

const toggleNav = () => {
  navStore.toggleNavMenu()
  isMenuOpen.value = navStore.isNavOpen
}

const checkScreenWidth = () => {
  isWideScreen.value = window.matchMedia('(min-width: 985px)').matches
}

const handleScroll = () => {
  const navHeight = mainNav.value?.getBoundingClientRect().height || 0
  const scrollPosition = window.scrollY
  // Gdy nawigacja znika z widoku
  showBurgerMenu.value = scrollPosition > navHeight
}

onMounted(() => {
  checkScreenWidth()
  window.addEventListener('resize', checkScreenWidth)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenWidth)
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  min-height: 100vh;
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
}
nav ul {
  display: flex;
  gap: 3rem;
}
nav ul li {
  padding: 0 2rem 0 0;
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
  position: relative;
}
.burger-menu-fixed {
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color-primary);
  padding: 1rem;
  border-radius: 5%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.burger-menu-fixed button {
  background: none;
  border: none;
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

.main-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-header p {
  letter-spacing: 0.2rem;
  font-size: 1rem;
  padding-left: 3px;
}
.header-top a {
  font-size: calc(1rem + 0.1vw);
  text-decoration: none;
  color: var(--text-color-primary);
  cursor: pointer;
}

hr {
  width: 100%;
  max-width: 1200px;
}
.header-content {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  flex: 1;
}
.header-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
.header-text h2 {
  text-transform: uppercase;
  font-size: calc(1.2rem + 1.2vw);
  letter-spacing: 0.4rem;
  font-weight: 300;
  width: 60%;
}
.header-text p {
  font-size: calc(1.2rem + 1vw);
  letter-spacing: 0.2rem;
  font-weight: 200;
  width: 60%;
}
.header-text .logo {
  width: 30vw;
  max-width: 250px;
  object-fit: contain;
}
.header-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}
.header-image-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
}
.header-img {
  width: 100%;
  height: auto;
  max-height: 50vh;
  min-height: 400px;
  object-fit: cover;
  object-position: bottom;
  display: block;
}
@media (max-width: 934px) {
  .header-top .container {
    flex-direction: row-reverse;
  }
  .burger-menu-fixed {
    padding: 0.5rem;
  }
}
@media (max-width: 890px) {
  .header-top {
    flex-direction: column;
    height: auto;
  }

  .header-top h1 {
    font-size: 1.3rem;
  }
  .main-header p {
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }
  .header-text h2,
  .header-text p {
    width: 100%;
  }

  .header-img {
    height: auto;
    max-height: 40vh;
    object-fit: cover;
  }
}
</style>

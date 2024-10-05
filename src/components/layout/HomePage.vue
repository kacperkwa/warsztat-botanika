<template>
  <header id="home">
    <div class="header-top" ref="mainNav">
      <div class="container">
        <BurgerMenu v-if="!isWideScreen" @click="toggleNav"></BurgerMenu>
        <div class="main-header">
          <h1>warsztat botanika</h1>
          <p>pracownia projektowa</p>
        </div>
        <NavigationMenuDesktop v-if="isWideScreen" />
        <Transition name="fade"
          ><NavigationMenuMobile v-if="isMenuOpen" @closeMenu="toggleNav"
        /></Transition>

        <ScrollMenuButton v-if="showBurgerMenu" @click="toggleNav" />
      </div>
      <hr />
    </div>
    <div class="header-content">
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
          src="../../assets/img/header-img-desktop.jpg"
          alt="Obraz przedstawiający ogród z hamakiem."
        />
      </div>
    </div>
    <hr />
  </header>
</template>
<script setup>
import BurgerMenu from '@/components/UI/BurgerMenu.vue'
import ScrollMenuButton from '../UI/ScrollMenuButton.vue'
import NavigationMenuMobile from '@/components/layout/NavigationMenuMobile.vue'
import NavigationMenuDesktop from './NavigationMenuDesktop.vue'
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
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    right 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  right: -100%;
}
@media (max-width: 984px) {
  .header-top .container {
    flex-direction: row-reverse;
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

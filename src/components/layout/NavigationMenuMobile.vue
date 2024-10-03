<template>
  <nav>
    <button class="close-nav" @click="closeMenu"><i class="fa-solid fa-xmark"></i></button>
    <ul>
      <li><a href="#o-mnie" @click="closeMenu">kim jestem</a></li>
      <li><a href="#projekty" @click="closeMenu">projekty</a></li>
      <li><a href="#oferta" @click="closeMenu">oferta</a></li>
      <li><a href="#cennik" @click="closeMenu">cennik</a></li>
      <li><a href="#pierwszy-krok" @click="closeMenu">pierwszy krok</a></li>
      <li><a href="#kontakt" @click="closeMenu">kontakt</a></li>
    </ul>
  </nav>
</template>
<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['closeMenu'])
const closeMenu = () => {
  emit('closeMenu')
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  position: fixed;
  width: 50%;
  height: 100vh;
  top: 0;
  right: 0;
  padding: 2rem;
  background-color: var(--background-color-secondary);
  overflow-y: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  z-index: 1001;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}
a {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  text-align: left;
  font-size: 1.6rem;
  color: var(--text-color-secondary);
  text-decoration: none;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}
a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: white;
  bottom: -3px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

button {
  position: absolute;
  top: 30px;
  right: 20px;
  border: none;
  background: transparent;
  color: var(--text-color-secondary);
  font-size: 3rem;
  cursor: pointer;
  transition: scale 0.3s ease;
}
.close-nav:hover {
  scale: 1.1;
}

@media (max-width: 768px) {
  nav {
    width: 70%;
  }
}
</style>

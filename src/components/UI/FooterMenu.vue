<template>
  <nav class="menu-container">
    <ul>
      <li><a href="#o-mnie">kim jestem</a></li>
      <li><a href="#projekty">projekty</a></li>
      <li><a href="#oferta">oferta</a></li>
      <li><a href="#pierwszy-krok">pierwszy krok</a></li>
      <li><button @click="openModal">polityka prywatności i cookies</button></li>
    </ul>
    <p>&copy;2024 Warsztat Botanika</p>
  </nav>
  <PolicyModal v-if="useModal.isPolicyModalOpen"></PolicyModal>
</template>
<script setup>
import PolicyModal from '../policy/PolicyModal.vue'
import { useModalStore } from '@/stores/modal'

const useModal = useModalStore()
const openModal = () => {
  useModal.togglePolicyModal()
  document.body.style.overflow = 'hidden'
}
</script>
<style scoped>
.menu-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--section-footer-background-color);
}
a,
button {
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-color-secondary);
  cursor: pointer;
  font-size: 1.2rem;
  padding-right: 0.5rem;
}
button {
  background-color: transparent;
  border: none;
  padding: 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  list-style: none;
}
nav ul li {
  padding: 0 0.5rem 0 0;
  border-right: 1px solid var(--text-color-secondary);
}
nav ul li:last-child {
  border-right: none;
}
</style>

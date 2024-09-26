<template>
  <nav class="menu-container">
    <ul>
      <li><a href="#o-mnie">kim jestem</a></li>
      <li><a href="#projekty">projekty</a></li>
      <li><a href="#oferta">oferta</a></li>
      <li><a href="#pierwszy-krok">pierwszy krok</a></li>
      <li><button @click="openModal">polityka prywatności i cookies</button></li>
    </ul>
  </nav>
  <PolicyModal v-if="!useModal.isPolicyModalOpen"></PolicyModal>
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
</style>

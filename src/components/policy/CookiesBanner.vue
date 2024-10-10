<template>
  <div class="cookies-banner" v-if="!isAccepted">
    <div class="container">
      <span class="heading">Informacja o plikach cookies</span>
      <p>
        Nasza strona internetowa korzysta z plików cookie, które są niezbędne do jej prawidłowego
        funkcjonowania. Pliki te nie zbierają żadnych danych osobowych ani nie są wykorzystywane w
        celach marketingowych. Aby dowiedzieć się więcej o tym, jakie pliki cookie są używane oraz
        jak możesz zarządzać swoimi ustawieniami, zapraszamy do zapoznania się z naszą
        <span class="policy-modal-btn" @click="openPolicyModal">Polityka Prywatności</span>.
      </p>
      <button class="accept-btn" @click="acceptCookies">Akceptuje</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal.js'

const useModal = useModalStore()
const isAccepted = ref(false)
// onMounted(() => {
//   const cookieConsent = localStorage.getItem('cookieConsent')
//   if (cookieConsent) {
//     isAccepted.value = true
//   }
// })

// const acceptCookies = () => {
//   isAccepted.value = true
//   localStorage.setItem('cookieConsent', true)
// }
const openPolicyModal = () => {
  useModal.isPolicyModalOpen = true

  document.body.style.overflow = 'hidden'
}
</script>

<style scoped>
.cookies-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: var(--text-color-primary);
  background-color: var(--background-color-primary);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  z-index: 500;
  padding: 1rem 2rem 2rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.heading {
  font-weight: bold;
}
p,
span {
  color: var(--text-color-primary);
  font-size: 12px;
}
.accept-btn {
  border: none;
  background-color: var(--button-color);
  color: var(--text-color-secondary);
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.accept-btn:hover {
  background-color: var(--button-hover-color);
}
.policy-modal-btn {
  border: none;
  background-color: transparent;
  padding: 0;
  color: var(--background-color-secondary);
  font-weight: bold;
  cursor: pointer;
}
</style>

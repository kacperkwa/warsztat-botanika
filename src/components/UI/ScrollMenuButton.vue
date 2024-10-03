<template>
  <button><i class="fa-solid fa-bars"></i></button>
</template>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color-primary);
  padding: 1rem 1.5rem;
  border-radius: 5%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border: none;
}
button i {
  font-size: 2rem;
  color: var(--text-color-primary);
}
@media (max-width: 768px) {
  button {
    padding: 0.8rem 1.3rem;
  }
  button i {
    font-size: 1.8rem;
  }
}
</style>

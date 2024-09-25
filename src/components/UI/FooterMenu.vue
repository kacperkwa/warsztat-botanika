<template>
  <nav class="menu-container">
    <ul>
      <li><a href="#kim-jesten">kim jestem</a></li>
      <li><a href="#projekty">projekty</a></li>
      <li><a href="#oferta">oferta</a></li>
      <li><a href="#pierwszy-krok">pierwszy krok</a></li>
      <li><button>polityka prywatności</button></li>
      <li><button>zgody cookies</button></li>
    </ul>
  </nav>
</template>
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

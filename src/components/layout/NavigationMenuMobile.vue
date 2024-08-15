<template>
  <nav>
    <div class="close-nav"><i class="fa-solid fa-xmark"></i></div>
    <ul>
      <li><a href="">kim jestem</a></li>
      <li><a href="">projekty</a></li>
      <li><a href="">oferta</a></li>
      <li><a href="">pierwszy krok</a></li>
    </ul>
  </nav>
</template>
<script setup></script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 2rem;
  background-color: var(--background-color-secondary);
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
a {
  text-transform: uppercase;
  font-size: 1.6rem;
  color: var(--text-color-secondary);
  text-decoration: none;
}
.fa-xmark {
  font-size: 2rem;
  color: var(--text-color-secondary);
  cursor: pointer;
  padding: 1rem;
}
</style>

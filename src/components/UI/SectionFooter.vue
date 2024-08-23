<template>
  <div>
    <p>warsztat botanika</p>
    <p>architektura krajobrazu</p>
  </div>
</template>
<style scoped>
div {
  display: flex;
  justify-content: center;
  background-color: var(--section-footer-background-color);
  padding: 1rem;
  text-transform: uppercase;
}
p {
  margin: 0;
  padding: 0 1rem; /* Równy padding z obu stron */
  font-size: 1.2rem;
}

p:first-child {
  border-right: 1px solid var(--text-color-primary); /* Linia pionowa */
}
</style>

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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: var(--section-footer-background-color);
  color: var(--text-color-primary);
  text-transform: uppercase;
}
p {
  margin: 0;
  padding: 0 1rem;
  font-size: 1.2rem;
}

p:first-child {
  border-right: 1px solid var(--text-color-primary);
}
</style>

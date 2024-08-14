<template>
  <a><slot></slot></a>
</template>

<style scoped>
a {
  display: block;
  padding: clamp(0.5rem, 1vw + 1rem, 2rem);
  border: 3px solid var(--button-border-color);
  border-radius: 3px;
  background-color: var(--background-color-secondary);
  color: var(--text-color-secondary);
  text-transform: uppercase;
  cursor: pointer;
}
</style>

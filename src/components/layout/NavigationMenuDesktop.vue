<template>
  <nav>
    <ul>
      <li><a class="navigation-hover" href="#projekty">projekty</a></li>
      <li><a class="navigation-hover" href="#oferta">oferta</a></li>
      <li><a class="navigation-hover" href="#cennik">cennik</a></li>
      <li><a class="navigation-hover" href="#o-mnie">kim jestem</a></li>
      <li><a class="navigation-hover" href="#pierwszy-krok">pierwszy krok</a></li>
      <li><a class="navigation-hover" href="#kontakt">kontakt</a></li>
    </ul>
  </nav>
</template>
<style scoped>
nav ul {
  display: flex;
  gap: 2rem;
}
nav ul li {
  padding: 0 2rem 0 0;
  border-right: 1px solid var(--text-color-primary);
}
nav ul li:last-child {
  border-right: none;
}
a {
  font-size: calc(1rem + 0.2vw);
  text-decoration: none;
  color: var(--text-color-primary);
  cursor: pointer;
  position: relative;
}
a:hover {
  text-shadow: 0 0 1px var(--text-color-primary);
}
.navigation-hover::before {
  background-color: var(--text-color-primary);
  height: 1px;
}
</style>

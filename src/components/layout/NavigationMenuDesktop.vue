<template>
  <nav>
    <ul>
      <li><a href="#o-mnie">kim jestem</a></li>
      <li><a href="#projekty">projekty</a></li>
      <li><a href="#oferta">oferta</a></li>
      <li><a href="#cennik">cennik</a></li>
      <li><a href="#pierwszy-krok">pierwszy krok</a></li>
      <li><a href="#kontakt">kontakt</a></li>
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
a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  border-radius: 4px;
  background-color: var(--text-color-primary);
  bottom: -3px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>

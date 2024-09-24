<template>
  <section class="offer-container">
    <h3>co projektuję</h3>
    <div class="content-container">
      <div class="offer-item">
        <h4>kompleksowo:</h4>
        <ol class="item-list">
          <li>ogrody prywatne</li>
          <li>ogródki przy zabudowie szeregowej i wielorodzinnej</li>
          <li>zieleń osiedlową dla wspólnot i deweloperów</li>
          <li>balkony i tarasy</li>
        </ol>
      </div>
      <div class="offer-item">
        <h4>wybrany zakres:</h4>
        <ol class="item-list">
          <li>dobór roślin</li>
          <li>fragmenty ogrodów</li>
          <li>nawierzchnie</li>
          <li>koncepcje ogrodzenia</li>
          <li>elewacje budynków</li>
        </ol>
      </div>
      <div class="offer-item">
        <h4>dodatkowo:</h4>
        <ol class="item-list">
          <li>modelowanie 3D brył domów na podstawie rzutów lub zdjęć</li>
          <li>wizualizacje ogrodów na podstawie gotowego projektu</li>
        </ol>
      </div>
    </div>
  </section>
</template>
<style scoped>
.offer-container {
  min-height: auto;
  gap: 15rem;
}
.content-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 0 2rem;
}
.offer-item {
  padding: 2rem;
  width: 300px;
  background-color: var(--background-color-secondary);
  color: white;
  border-radius: 4px;
}
.offer-item h4 {
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: calc(1.6rem + 0.3vw);
  margin-bottom: 3rem;
}
.item-list {
  list-style-type: disc;
  padding-left: 2rem;
}
.item-list li {
  margin: 1rem 0;
  font-size: calc(1.4rem + 0.3vw);
  letter-spacing: 0.2rem;
}
@media (max-width: 716px) {
  .offer-container {
    gap: 5rem;
  }
}
</style>

<template>
  <section class="offer-container" id="cennik">
    <h3>cennik</h3>
    <div class="prices-table">
      <div class="first-row-title div1">powierzchnia opracowania</div>
      <div class="first-row-item div2">
        <span>do 200&nbsp;m<sup>2</sup></span>
      </div>
      <div class="first-row-item div3">
        <span>201 - 800&nbsp;m<sup>2</sup></span>
      </div>
      <div class="first-row-item div4">
        <span>801 - 1500&nbsp;m<sup>2</sup></span>
      </div>
      <div class="second-row-title div5">WARIANT PODSTAWOWY</div>
      <div class="second-row-item div6">700 - 2&nbsp;000 zł</div>
      <div class="second-row-item div7">2 000 - 4&nbsp;000 zł</div>
      <div class="second-row-item div8">4 000 - 6&nbsp;000 zł</div>
      <div class="third-row-item div9">
        <ul>
          <li>
            <p>pomiary w terenie</p>
          </li>
          <li>
            <p>
              dwie koncepcje ogrodu (rzut 2D) z&nbsp;zaplanowaną komunikacją oraz wskazanie
              lokalizacji elementów rozmieszczanych na działce
            </p>
          </li>
          <li>
            <p>model koncepcyjny 3D wybranej wersji</p>
          </li>
          <li>
            <p>
              proponowane gatunki roślin (katalog w formie tabeli ze zdjęciami +&nbsp;moodboard
              z&nbsp;kompozycjami)
            </p>
          </li>
          <li>
            <p>nawierzchnie (sugerowana kolorystyka, zestawienie ilościowe)</p>
          </li>
          <li>
            <p>
              koncepcja ogrodzenia (przebieg ogrodzenia, lokalizacja furtki, bramy, wiaty
              śmietnikowej itp.)
            </p>
          </li>
          <li>
            <p>schemat rozmieszczenia punktów świetlnych (określenie rodzaju oprawy)</p>
          </li>
          <li>
            <p>plansza z&nbsp;wymiarowaniem</p>
          </li>
        </ul>
      </div>
      <div class="fourth-row-title div10">WARIANT ROZSZERZONY</div>
      <div class="fourth-row-item div11">1 400 - 4&nbsp;000 zł</div>
      <div class="fourth-row-item div12">4 000 - 8&nbsp;000 zł</div>
      <div class="fourth-row-item div13">8 000 - 15&nbsp;000 zł</div>
      <div class="fifth-row-item div14">
        <ul>
          <li>
            <p>pomiary w terenie</p>
          </li>
          <li>
            <p>
              model koncepcyjny 3D dwóch wersji ogrodu z&nbsp;zaplanowaną komunikacją oraz wskazanie
              lokalizacji elementów rozmieszczanych na działce
            </p>
          </li>
          <li>
            <p>
              proponowane gatunki roślin (katalog w&nbsp;formie tabeli ze zdjęciami +&nbsp;moodboard
              z&nbsp;kompozycjami)
            </p>
          </li>
          <li>
            <p>
              rozmieszczenie roślin (plansza z&nbsp;rozmieszczeniem, lista roślin z&nbsp;podaniem
              sztuk do zakupu)
            </p>
          </li>
          <li>
            <p>nawierzchnie (producent, model, kolor, zestawienie ilościowe)</p>
          </li>
          <li>
            <p>
              koncepcja ogrodzenia (przebieg ogrodzenia, widok frontowy, materiał, kolor,
              lokalizacja furtki, bramy, wiaty śmietnikowej, itp.)
            </p>
          </li>
          <li>
            <p>
              schemat rozmieszczenia punktów świetlnych (dobór konkretnej oprawy, sugerowany podział
              na obwody)
            </p>
          </li>
          <li>
            <p>plansza z&nbsp;wymiarowaniem</p>
          </li>
          <li>
            <p>nawadnianie</p>
          </li>
          <li>
            <p>wizualizacje 3D</p>
          </li>
        </ul>
      </div>
    </div>
    <p class="prices-info">
      Nie jestem podatnikiem vat. Podane przedziały są szacowanymi wartościami brutto.<span
        >Niniejszy cennik ma charakter informacyjny i nie stanowi oferty handlowej w rozumieniu art.
        66 par. 1 Kodeksu Cywilnego. Wycena każdego projektu jest indywidualna, gdyż wartość danego
        projektu zależy od wielu czynników – między innymi jego wielkości, stopnia skomplikowania
        terenu, liczby elementów do zaprojektowania.</span
      >
    </p>
  </section>
</template>
<style scoped>
.prices-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: calc(0.8rem + 0.2vw);
  font-weight: 300;
  text-align: justify;
  max-width: 650px;
}

.prices-table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(80px, auto);
  text-align: center;
  gap: 1rem;
  max-width: 650px;
  padding-top: 3rem;
}
.prices-table div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.first-row-title {
  background-color: var(--background-color-secondary);
}
.first-row-item,
.second-row-title,
.fourth-row-title {
  background-color: var(--table-cell-color-primary);
}
.second-row-item,
.third-row-item,
.fourth-row-item,
.fifth-row-item {
  background-color: var(--table-cell-color-secondary);
  color: #807c73;
  font-size: calc(0.8rem + 0.4vw);
}
.second-row-item,
.fourth-row-item {
  font-size: calc(0.8rem + 0.4vw);
  text-transform: uppercase;
}
.first-row-title,
.second-row-title,
.fourth-row-title,
.first-row-item {
  text-transform: uppercase;
  font-size: calc(0.8rem + 0.4vw);
  letter-spacing: 0.1rem;
  font-weight: 500;
  color: #3d3b3a;
}
.first-row-item span {
  font-weight: 500;
}
ul {
  list-style-type: disc;
  text-align: left;
  padding-left: 3rem;
  letter-spacing: 0.1rem;
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
}
.div4 {
  grid-area: 1 / 4 / 2 / 5;
}
.div5 {
  grid-area: 2 / 1 / 3 / 2;
}
.div6 {
  grid-area: 2 / 2 / 3 / 3;
}
.div7 {
  grid-area: 2 / 3 / 3 / 4;
}
.div8 {
  grid-area: 2 / 4 / 3 / 5;
}
.div9 {
  grid-area: 3 / 1 / 4 / 5;
}
.div10 {
  grid-area: 4 / 1 / 5 / 2;
}
.div11 {
  grid-area: 4 / 2 / 5 / 3;
}
.div12 {
  grid-area: 4 / 3 / 5 / 4;
}
.div13 {
  grid-area: 4 / 4 / 5 / 5;
}
.div14 {
  grid-area: 5 / 1 / 6 / 5;
}
</style>

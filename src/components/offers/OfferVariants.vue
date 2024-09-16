<template>
  <section class="offer-container">
    <h3>warianty oferty</h3>
    <div class="variants-content">
      <div class="basic-variant">
        <h4>wariant podstawowy</h4>
        <ol>
          <li>
            dwie koncepcje ogrodu (rzut 2D) z&nbsp;zaplanowaną komunikacją oraz wskazanie
            lokalizacji elementów rozmieszczanych na działce
          </li>
          <li>model koncepcyjny 3D wybranej wersji</li>
          <li>
            plansze z&nbsp;podziałem na:
            <ol>
              <li>
                proponowane gatunki roślin - katalog ze zdjęciami + moodboard z&nbsp;kompozycjami,
                bez planu nasadzeń
              </li>
              <li>nawierzchnie - sugerowana kolorystyka, zestawienie ilościowe, wymiarowanie</li>
              <li>
                koncepcja ogrodzenia - przebieg ogrodzenia, lokalizacja furtki, bramy, wiaty
                śmietnikowej itp.
              </li>
              <li>schemat rozmieszczenia punktów świetlnych - określenie rodzaju oprawy</li>
              <li>plansza z&nbsp;wymiarowaniem</li>
              <li>
                nawadnianie* - zebranie danych do projektu nawadniania i&nbsp;przygotowanie planszy
                z&nbsp;instalacjami, przekazanie materiałów do zaprzyjaźnionej firmy
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="separator"></div>
      <div class="extended-variant">
        <h4>wariant rozszerzony</h4>
        <ol>
          <li>
            dwie koncepcje ogrodu (rzut 2D) z&nbsp;zaplanowaną komunikacją oraz wskazanie
            lokalizacji elementów rozmieszczanych na działce
          </li>
          <li>model koncepcyjny 3D <em>dwóch</em> wersji ogrodu</li>
          <li>
            plansze i&nbsp;zestawienia ilościowe z&nbsp;podziałem na:
            <ol>
              <li>
                rośliny – katalog ze zdjęciami + moodboard z kompozycjami, plan
                z&nbsp;rozmieszczenie roślin, zliczone sztuki, podręczna lista roślin do zakupu w
                szkółce
              </li>
              <li>nawierzchnie - producent, model, kolor, wymiarowanie</li>
              <li>
                koncepcja ogrodzenia - przebieg ogrodzenia, widok frontowy, materiał, kolor,
                lokalizacja furtki, bramy, wiaty śmietnikowej, itp.
              </li>
              <li>
                schemat rozmieszczenia punktów świetlnych - dobór konkretnej oprawy, sugerowany
                podział na obwody
              </li>
              <li>plansza z&nbsp;wymiarowaniem</li>
              <li>
                nawadnianie* - zebranie danych do projektu nawadniania i&nbsp;przygotowanie planszy
                z&nbsp;instalacjami, przekazanie materiałów do zaprzyjaźnionej firmy
              </li>
            </ol>
          </li>
          <li>wizualizacje 3D</li>
        </ol>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
section.offer-container {
  padding-top: 2rem;
}
.variants-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
}
.variants-content {
  display: flex;
  justify-content: center;
  gap: 5rem;
  position: relative;
}
h4 {
  font-size: calc(1.2rem + 0.2vw);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-weight: 500;
}
h3 {
  font-size: calc(1.2rem + 0.2vw);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-weight: 500;
  max-width: max-content;
  padding-bottom: 1rem;
  border-bottom: 1px solid #9e9d9d;
}

.separator {
  width: 1px;
  background-color: #9e9d9d;
  margin-bottom: -20px;
  margin-top: -20px;
}

.basic-variant,
.extended-variant {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 45%;
  font-size: calc(1.2rem + 0.3vw);
}

.basic-variant ol,
.extended-variant ol {
  list-style-type: decimal;
  padding-left: 2rem;
}
.basic-variant li ol,
.extended-variant li ol {
  list-style-type: disc;
}
em {
  font-weight: bold;
}
@media (max-width: 968px) {
  .variants-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-top: 6rem;
  }
  .basic-variant,
  .extended-variant {
    width: 100%;
    gap: 3rem;
    align-items: center;
    justify-content: center;
  }
  .separator {
    display: none;
  }
}
</style>

<template>
  <section class="offer-container">
    <h3>przykładowy zakres gotowego projektu w wariancie rozszerzonym</h3>
    <div class="content-container">
      <div class="offer-item">
        <h4>Rozmieszczenie roślin</h4>
        <p>
          Katalog w formie tabeli z&nbsp;graficznym przedstawieniem rośliny oraz podstawowe zabiegi
          pozwalające na samodzielną pielęgnacje roślin w ogrodzie. Plansza z&nbsp;rozrysowanym
          planem nasadzeń określająca dokładną lokalizację sadzenia każdej rośliny. Podręczna lista
          roślin do zakupu.
        </p>
      </div>
      <div class="offer-item">
        <h4>nawierzchnie</h4>
        <p>
          Zwymiarowany rysunek wraz z&nbsp;katalogiem dobranych materiałów na ścieżki, podjazdy,
          inne nawierzchnie utwardzone. Podanie producenta, modelu, koloru. Zliczenie potrzebnych
          ilości do zakupu.
        </p>
      </div>
      <div class="offer-item">
        <h4>mała architektura</h4>
        <p>
          Gotowe produkty lub elementy na indywidualne zamówienie z&nbsp;podstawowymi wymiarami i
          sugerowanymi materiałami. Może to być: pergola, altana, wiata śmietnikowa, basen, jacuzzi,
          trampolina, huśtawka, wgłębnik z&nbsp;paleniskiem, warzywnik, itp.
        </p>
      </div>
      <div class="offer-item">
        <h4>ogrodzenie</h4>
        <p>
          Proponuję i&nbsp;rozrysowuję koncepcję ogrodzenia w rzucie oraz widok frontowy. Ze
          wskazaniem lokalizacja furtki, bramy, wiaty śmietnikowej, itp.
        </p>
      </div>
      <div class="offer-item">
        <h4>oświetlenie</h4>
        <p>
          Przygotowanie schematu rozmieszczenia punktów świetlnych wraz z&nbsp;doborem konkretnych
          opraw w formie katalogu. Wyznaczenie sugerowanego podziału lamp na obwody.
        </p>
      </div>
      <div class="offer-item">
        <h4>wizualizacje</h4>
        <p>
          Pozwolą przybliżyć ostateczny wygląd ogrodu po realizacji. Wykonując wizualizację mamy
          pewność, że zakładany ogród spełnia wszystkie oczekiwania i&nbsp;osiągniemy zakładany
          rezultat.
        </p>
      </div>
      <div class="offer-item">
        <h4>nawadnianie</h4>
        <p>
          Projekt nawadniania z&nbsp;wymaganymi obliczeniami, opisem, zestawieniem materiałów do
          zakupu i&nbsp;kosztorysem.
        </p>
        <p class="extra-info">
          *Wykonywany przez zaprzyjaźnioną firmę na podstawie przygotowanych rysunków
          i&nbsp;zebranych informacji dotyczących nawadniania.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
}
.offer-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h4 {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.2rem;
  font-size: calc(1.2rem + 0.2vw);
}
p {
  font-size: calc(1.1rem + 0.3vw);
  font-weight: 300;
  letter-spacing: 0.1rem;
}
.extra-info {
  font-size: calc(0.8rem + 0.2vw);
  font-style: italic;
}
</style>

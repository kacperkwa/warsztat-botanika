<template>
  <teleport to="body">
    <div class="modal-overlay" @click="closeModal">
      <div class="wrapper" @click.stop>
        <div class="policy-modal">
          <button class="close-btn" @click="closeModal" aria-label="Zamknij okno">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div class="policy-container">
            <h3 class="policy-header">Polityka prywatności i Plików Cookies</h3>
            <div class="policy-info">
              <ol class="policy-info-list">
                <li>
                  <h4>Administrator Danych Osobowych</h4>
                  <p class="policy-desc">
                    Warsztat Botanika, jako właściciel strony internetowej warsztatbotanika.pl, nie
                    zbiera ani nie przetwarza danych osobowych użytkowników w sposób aktywny.
                    Korzystanie ze strony nie wymaga podawania jakichkolwiek danych osobowych.
                  </p>
                </li>
                <li>
                  <h4>Zakres Zbieranych Danych</h4>
                  <p class="policy-desc">
                    Warsztat Botanika nie zbiera danych osobowych poprzez formularze kontaktowe czy
                    inne narzędzia interaktywne. Dane osobowe użytkowników mogą być jednak
                    przetwarzane przez podmioty zewnętrzne (np. Facebook, Google) w przypadku
                    korzystania z funkcji dostarczanych przez te serwisy.
                  </p>
                </li>
                <li>
                  <h4>Pliki Cookies</h4>
                  <p class="policy-desc">
                    Strona korzysta z plików cookies w celu zapewnienia użytkownikom najlepszej
                    jakości korzystania z dostępnych funkcji.
                  </p>
                  <ol>
                    <li>
                      <h5>Google Maps</h5>
                      <p>
                        Strona warsztatbotanika.pl wykorzystuje Google Maps w celu prezentacji
                        lokalizacji firmy. Usługa ta może wykorzystywać pliki cookies w celach
                        związanych z poprawnym wyświetlaniem mapy oraz zbieraniem danych
                        statystycznych o ruchu. Google może zbierać dane na temat interakcji
                        użytkownika z mapą, które mogą być przetwarzane poza kontrolą administratora
                        strony. Więcej informacji na temat polityki prywatności Google można znaleźć
                        !!tutaj!!.
                      </p>
                    </li>
                    <li>
                      <h5>Linki do serwisów zewnętrznych (Facebook i Google)</h5>
                      <p>
                        Na stronie znajdują się linki do serwisu Facebook oraz ankiety Google.
                        Klikając w te linki, użytkownik jest przekierowywany na zewnętrzne strony,
                        które mogą stosować własne polityki prywatności i plików cookies. Zachęcamy
                        do zapoznania się z politykami prywatności tych serwisów przed rozpoczęciem
                        korzystania z ich usług: <br />
                        <span class="extra-links">
                          <a href="https://pl-pl.facebook.com/privacy/policy/" target="_blank"
                            >Facebook - Polityka prywatności</a
                          >
                          <a href="https://policies.google.com/privacy?hl=pl" target="_blank">
                            Google - Polityka prywatności</a
                          ></span
                        >
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <h4>Cele Przetwarzania Danych</h4>
                  <p class="policy-desc">
                    Na stronie warsztatbotanika.pl nie są przetwarzane dane osobowe w celach
                    marketingowych, statystycznych ani analitycznych przez administratora strony.
                    Jednakże narzędzia zewnętrzne, takie jak Google Maps, mogą przetwarzać dane
                    użytkowników, np. w celu analizy ruchu czy zapewnienia poprawności działania
                    mapy.
                  </p>
                </li>
                <li>
                  <h4>Prawa Użytkowników</h4>
                  <p class="policy-desc">
                    Każdy użytkownik ma prawo do zarządzania plikami cookies w swojej przeglądarce
                    internetowej. Może on je usunąć, ograniczyć lub całkowicie wyłączyć w
                    ustawieniach przeglądarki. Należy jednak pamiętać, że wyłączenie plików cookies
                    może wpłynąć na funkcjonalność niektórych elementów strony, takich jak Google
                    Maps.
                  </p>
                </li>
                <li>
                  <h4>Zarządzanie Plikami Cookies</h4>
                  <p class="policy-desc">
                    Użytkownicy mogą samodzielnie zarządzać plikami cookies poprzez ustawienia
                    przeglądarki. Instrukcje dotyczące zarządzania plikami cookies w popularnych
                    przeglądarkach:
                    <span class="extra-links">
                      <a
                        href="https://support.google.com/accounts/answer/61416?hl=pl&co=GENIE.Platform%3DDesktop"
                        target="_blank"
                        >Google Chrome</a
                      >
                      <a href="https://support.mozilla.org/pl/kb/ciasteczka" target="_blank"
                        >Mozilla Firefox</a
                      >
                      <a
                        href="https://support.apple.com/pl-pl/guide/deployment/depf7d5714d4/web"
                        target="_blank"
                        >Safari</a
                      >
                      <a
                        href="https://support.microsoft.com/pl-pl/windows/zarz%C4%85dzanie-plikami-cookie-w-przegl%C4%85darce-microsoft-edge-wy%C5%9Bwietlanie-zezwalanie-blokowanie-usuwanie-i-u%C5%BCywanie-168dab11-0753-043d-7c16-ede5947fc64d"
                        target="_blank"
                        >Microsoft Edge</a
                      >
                    </span>
                  </p>
                </li>
                <li>
                  <h4>Zmiany w Polityce Prywatności</h4>
                  <p class="policy-desc">
                    Warsztat Botanika zastrzega sobie prawo do zmiany niniejszej polityki
                    prywatności i plików cookies w dowolnym momencie. Wszelkie zmiany zostaną
                    opublikowane na tej stronie. Zachęcamy do regularnego przeglądania niniejszej
                    polityki, aby być na bieżąco z aktualnymi praktykami.
                  </p>
                </li>
                <li>
                  <h4>Zapisy w Local Storage</h4>
                  <p class="policy-desc">
                    Akceptacja plików cookie przez użytkownika jest zapisywana w local storage
                    przeglądarki, co pozwala na uniknięcie ponownego wyświetlania banera
                    informacyjnego. Użytkownik ma możliwość usunięcia tych danych z local storage w
                    ustawieniach przeglądarki.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup>
import { useModalStore } from '@/stores/modal'
const useModal = useModalStore()
const closeModal = () => {
  useModal.togglePolicyModal()
  document.body.style.overflow = ''
}
</script>

<style scoped>
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  color: var(--text-color-primary);
  cursor: pointer;
}
.close-btn i {
  font-size: 3rem;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.wrapper {
  position: relative;
  background-color: var(--background-color-primary);
  height: 90%;
  width: 90%;
  padding-top: 5rem;
  padding-bottom: 5rem;
  overflow-y: auto;
  z-index: 1000;
  border-radius: 8px;
  outline: none;
}
ol {
  list-style-type: decimal;
  padding-left: 4rem;
}
ol ol {
  list-style-type: lower-alpha;
  padding-left: 2rem;
}
li p {
  font-size: calc(1.2rem + 0.2vw);
  font-weight: 300;
}
li h4,
li h5,
ol li {
  font-size: calc(1.2rem + 0.3vw);
  font-weight: 500;
  margin-bottom: 0.5rem;
}
h3 {
  font-size: calc(1.6rem + 0.4vw);
  text-align: center;
  margin-bottom: 2rem;
}
.policy-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}
.policy-info {
  width: 70%;
}
.policy-info-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.extra-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  margin-top: 1rem;
}
.extra-links a {
  color: var(--text-color-primary);
  text-decoration: underline;
}
@media (max-width: 1000px) {
  .wrapper {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  .policy-info {
    width: 100%;
    padding: 0 2rem;
  }
}
</style>

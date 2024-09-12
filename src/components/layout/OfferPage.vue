<template>
  <section id="offer">
    <div class="container">
      <h2>OFERTA</h2>
      <OfferVariants></OfferVariants>
      <OfferPrices></OfferPrices>
    </div>
  </section>
</template>
<script setup>
import OfferVariants from '@/components/offers/OfferVariants.vue'
import OfferPrices from '@/components/offers/OfferPrices.vue'
</script>
<style scoped>
#offer {
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
}
.container {
  justify-content: flex-start;
}
</style>

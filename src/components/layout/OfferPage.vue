<template>
  <section id="oferta">
    <div class="container">
      <h2>OFERTA</h2>
      <OfferVariants></OfferVariants>
      <OfferScope></OfferScope>
      <OfferPrices></OfferPrices>
      <SectionFooter />
    </div>
  </section>
</template>
<script setup>
import OfferVariants from '@/components/offers/OfferVariants.vue'
import OfferPrices from '@/components/offers/OfferPrices.vue'
import OfferScope from '@/components/offers/OfferScope.vue'
import SectionFooter from '@/components/UI/SectionFooter.vue'
</script>
<style scoped>
#oferta {
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
}
</style>

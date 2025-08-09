<script setup>
import SiteHeader from './components/SiteHeader.vue'
import MainBanner from './components/MainBanner.vue'
import ProductShelf from './components/ProductShelf.vue'
import SiteFooter from './components/SiteFooter.vue'
import { jackets, cameras } from './data/sampleProducts.js'
</script>

<template>
  <SiteHeader />
  <main>
    <MainBanner />
    <ProductShelf title="já gostei desse seu casaco" subtitle="tomaqui um novinho em folha" :products="jackets" />
    <ProductShelf title="câmeras digitais até 70% off" subtitle="descomplique nos cliques" :products="cameras" />
  </main>
  <SiteFooter />
</template>

<style scoped>
main{display:block}
</style>

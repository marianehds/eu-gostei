<script setup>
import SiteHeader from "./components/SiteHeader/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter/SiteFooter.vue";
import MainBanner from "./components/Banner/MainBanner.vue";
import ProductShelf from "./components/ProductShelf/ProductShelf.vue";
import { jackets, cameras } from "./data/sampleProducts.js";
</script>

<template>
  <div id="app">
    <SiteHeader />
    <main>
      <MainBanner />
      <ProductShelf
        title="já gostei desse seu casaco"
        subtitle="tomaqui um novinho em folha"
        :products="jackets"
      />
      <ProductShelf
        title="câmeras digitais até 70% off"
        subtitle="descomplique nos cliques"
        :products="cameras"
      />
    </main>
    <SiteFooter />
  </div>
</template>

<style lang="scss" scoped>
@use "./styles/variables" as *;

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-height: 0;
}
</style>

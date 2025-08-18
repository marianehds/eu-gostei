<script setup>
import { ref } from 'vue'
import SiteHeader from "./components/SiteHeader/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter/SiteFooter.vue";
import MainBanner from "./components/Banner/MainBanner.vue";
import ProductShelf from "./components/ProductShelf/ProductShelf.vue";
import ProductModal from "./components/ProductModal/ProductModal.vue";
import { jackets, cameras } from "./data/sampleProducts.js";
import { useI18n } from "./i18n.js";

const selectedProduct = ref(null)
const isModalOpen = ref(false)

const openProduct = (product) => { selectedProduct.value = product; isModalOpen.value = true }

const { t } = useI18n()
</script>

<template>
  <div id="app">
    <SiteHeader />
    <main>
      <MainBanner />
      <ProductShelf
        :title="t('app.shelf.jackets.title')"
        :subtitle="t('app.shelf.jackets.subtitle')"
        :products="jackets"
        @select="openProduct"
      />
      <ProductShelf
        :title="t('app.shelf.cameras.title')"
        :subtitle="t('app.shelf.cameras.subtitle')"
        :products="cameras"
        @select="openProduct"
      />
    </main>
    <SiteFooter />

    <ProductModal v-model="isModalOpen" :product="selectedProduct" />
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

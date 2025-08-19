<script setup>
import { ref } from 'vue'
import MainBanner from "./Banner/MainBanner.vue";
import ProductShelf from "./ProductShelf/ProductShelf.vue";
import ProductModal from "./ProductModal/ProductModal.vue";
import { jackets, cameras } from "../data/sampleProducts.js";
import { useI18n } from "../i18n.js";

const selectedProduct = ref(null)
const isModalOpen = ref(false)

const openProduct = (product) => { selectedProduct.value = product; isModalOpen.value = true }

const { t } = useI18n()
</script>

<template>
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
    <ProductModal v-model="isModalOpen" :product="selectedProduct" />
  </main>
</template>

<style lang="scss" scoped>
/* Add any specific styles for the home page here */
</style>

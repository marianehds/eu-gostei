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

<script setup>
import { ref } from 'vue'
import MainBanner from "../../components/Banner/MainBanner.vue";
import ProductShelf from "../../components/ProductShelf/ProductShelf.vue";
import ProductModal from "../../components/ProductModal/ProductModal.vue";
import { jackets, cameras } from "../../data/sampleProducts.js";
import { useI18n } from "../../i18n.js";

const selectedProduct = ref(null)
const isModalOpen = ref(false)

const openProduct = (product) => { selectedProduct.value = product; isModalOpen.value = true }

const { t } = useI18n()
</script>

<style lang="scss">
@use "./HomePage.scss";
</style>

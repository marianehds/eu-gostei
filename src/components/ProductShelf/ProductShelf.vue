<script setup>
import ProductCard from '../ProductCard/ProductCard.vue'
import { useI18n } from "../../i18n.js";

const props = defineProps({
  title: String,
  subtitle: String,
  products: Array,
})

const emit = defineEmits(['select'])

const { t } = useI18n()
</script>

<template>
  <section class="product-shelf">
    <div class="product-shelf__head">
      <div>
        <h3 class="product-shelf__title">{{ title }}</h3>
        <small class="product-shelf__subtitle" v-if="subtitle">{{ subtitle }}</small>
      </div>
      <a class="product-shelf__see-all" href="#">{{ t('app.shelf.seeAll') }}</a>
    </div>
    <div class="product-shelf__grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" @select="emit('select', $event)" />
    </div>
  </section>
</template>

<style lang="scss">
@use "./ProductShelf.scss";
</style>

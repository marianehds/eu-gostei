<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  title: String,
  subtitle: String,
  products: Array,
})
</script>

<template>
  <section class="product-shelf">
    <div class="product-shelf__head">
      <div>
        <h3 class="product-shelf__title">{{ title }}</h3>
        <small class="product-shelf__subtitle" v-if="subtitle">{{ subtitle }}</small>
      </div>
      <a class="product-shelf__see-all" href="#">ver tudo</a>
    </div>
    <div class="product-shelf__grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </section>
</template>

<style scoped>
.product-shelf{max-width:1200px;margin:24px auto;padding:0 20px}
.product-shelf__head{display:flex;align-items:end;justify-content:space-between;margin-bottom:12px}
.product-shelf__title{margin:0;font-size:20px}
.product-shelf__subtitle{color:#777}
.product-shelf__see-all{font-size:14px;color:#7a2eff;text-decoration:none}
.product-shelf__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
@media (max-width: 1000px){ .product-shelf__grid{grid-template-columns:repeat(3,1fr)} }
@media (max-width: 700px){ .product-shelf__grid{grid-template-columns:repeat(2,1fr)} }
</style> 
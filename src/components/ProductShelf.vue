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

<style lang="scss" scoped>
@use '../styles/variables' as *;

.product-shelf {
  max-width:$container-max; margin:24px auto; padding:0 $space-6;

  &__head { display:flex; align-items:end; justify-content:space-between; margin-bottom:$space-3; }
  &__title { margin:0; font-size:20px; }
  &__subtitle { color:#777; }
  &__see-all { font-size:14px; color:$color-primary; text-decoration:none; }

  &__grid { display:grid; grid-template-columns:repeat(4,1fr); gap:$space-5; }

  @media (max-width: 1000px) { &__grid { grid-template-columns:repeat(3,1fr); } }
  @media (max-width: 700px) { &__grid { grid-template-columns:repeat(2,1fr); } }
}
</style> 
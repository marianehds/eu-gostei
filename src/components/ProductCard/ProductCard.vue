<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="product-card">
    <div class="product-card__image" :style="{ backgroundImage: `url(${product.imageUrl})` }" role="img" :aria-label="product.title"></div>
    <div class="product-card__info">
      <h4 class="product-card__title">{{ product.title }}</h4>
      <div class="product-card__price">R$ {{ Number(product.price).toFixed(2) }}</div>
    </div>
  </article>
</template>

<style src="./ProductCard.scss" lang="scss" scoped></style>

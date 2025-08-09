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

<style lang="scss" scoped>
@use '../styles/variables' as *;

.product-card {
  border:1px solid $color-border; border-radius:$radius-md; overflow:hidden; background:#fff; transition:box-shadow .2s;
  &:hover { box-shadow:0 6px 20px rgba(0,0,0,0.06); }

  &__image { background-size:cover; background-position:center; height:220px; }
  &__info { padding:$space-3; }
  &__title { font-size:14px; margin:0 0 $space-2; color:#333; }
  &__price { font-weight:700; color:#111; }
}
</style> 
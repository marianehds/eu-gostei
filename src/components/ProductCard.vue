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

<style scoped>
.product-card{border:1px solid #eee;border-radius:12px;overflow:hidden;background:#fff;transition:box-shadow .2s}
.product-card:hover{box-shadow:0 6px 20px rgba(0,0,0,0.06)}
.product-card__image{background-size:cover;background-position:center;height:220px}
.product-card__info{padding:10px}
.product-card__title{font-size:14px;margin:0 0 6px;color:#333}
.product-card__price{font-weight:700;color:#111}
</style> 
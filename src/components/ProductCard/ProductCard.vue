<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select'])

const onClick = () => emit('select', props.product)
import { useCurrency } from "../../store/currency";
const { formatPrice } = useCurrency()
</script>

<template>
  <article class="product-card" @click="onClick">
    <div class="product-card__image" :style="{ backgroundImage: `url(${product.imageUrl})` }" role="img" :aria-label="product.title"></div>
    <div class="product-card__info">
      <h4 class="product-card__title">{{ product.title }}</h4>
      <div class="product-card__price">{{ formatPrice(product.price) }}</div>
    </div>
  </article>
</template>

<style src="./ProductCard.scss" lang="scss" scoped></style>

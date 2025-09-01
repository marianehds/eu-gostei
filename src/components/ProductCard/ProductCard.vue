<script setup>
import { useI18n } from "../../i18n.js";
import { useCurrency } from "../../store/currency";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select'])
const { t } = useI18n()
const { formatPrice } = useCurrency()

const onClick = () => emit('select', props.product)
</script>

<template>
  <article class="product-card" @click="onClick">
    <div class="product-card__image" :style="{ backgroundImage: `url(${product.imageUrl})` }" role="img" :aria-label="t(product.title)"></div>
    <div class="product-card__info">
      <h4 class="product-card__title">{{ t(product.title) }}</h4>
      <div class="product-card__price">{{ formatPrice(product.price) }}</div>
    </div>
  </article>
</template>

<style lang="scss">
@use "./ProductCard.scss";
</style>
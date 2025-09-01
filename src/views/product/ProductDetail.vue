<template>
  <main class="product-detail">
    <div class="product-detail__container">
      <div class="product-detail__gallery">
        <img :src="currentImage" :alt="t(product.title)" />
        <div class="product-detail__thumbs" v-if="product.images?.length > 1">
          <button
            v-for="(img, i) in product.images"
            :key="i"
            :class="['thumb', { 'is-active': i === currentIndex }]"
            @click="currentIndex = i"
          >
            <img :src="img" :alt="`${t(product.title)} ${i + 1}`" />
          </button>
        </div>
      </div>
      <div class="product-detail__info">
        <h1 class="product-detail__title">{{ t(product.title) }}</h1>
        <div class="product-detail__price">{{ formatPrice(product.price) }}</div>

        <div class="product-detail__sizes" v-if="sizes.length">
          <label>Tamanho</label>
          <div class="size-grid">
            <button
              v-for="s in sizes"
              :key="s"
              :class="['size', { 'is-active': s === selectedSize }]"
              @click="selectedSize = s"
            >{{ s }}</button>
          </div>
        </div>

        <div class="product-detail__shipping">
          <label>Frete</label>
          <input v-model="zip" class="zip-input" placeholder="Digite seu CEP" />
          <button class="btn" @click="calcShipping">Calcular</button>
          <small v-if="shippingResult">{{ shippingResult }}</small>
        </div>

        <div class="product-detail__actions">
          <button class="btn btn-primary" :disabled="!selectedSize" @click="addToCart">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from '../../i18n.js';
import { useCurrency } from '../../store/currency';
import { jackets as jacketsStore } from '../../store/products.js';
import { productImages } from '../../assets/images/index.js';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const { formatPrice } = useCurrency();

// Compose product from store by id
const product = computed(() => {
  const id = String(route.params.id);
  const p = jacketsStore.find((x) => x.id === id);
  if (!p) return null;
  switch (p.id) {
    case 'j1':
      return {
        id: p.id,
        title: 'app.products.roupas.blazer.blazerGrafite.title',
        price: p.price,
        images: [
          productImages.roupas.blazer.blazerGrafite.front,
          productImages.roupas.blazer.blazerGrafite.back,
        ],
      };
    case 'j2':
      return {
        id: p.id,
        title: 'app.products.roupas.jaquetas.bomberJacket.title',
        price: p.price,
        images: [
          productImages.roupas.jaquetas.bomberJacket.image,
          productImages.roupas.jaquetas.bomberJacket.back,
        ],
      };
    case 'j3':
      return {
        id: p.id,
        title: 'app.products.roupas.jaquetas.furryJacket.title',
        price: p.price,
        images: [
          productImages.roupas.jaquetas.furryJacket.front,
          productImages.roupas.jaquetas.furryJacket.back,
        ],
      };
    case 'j5':
      return {
        id: p.id,
        title: 'app.products.roupas.casacos.leatherOvercoat.title',
        price: p.price,
        images: [
          productImages.roupas.casacos.leatherOvercoat.front,
          productImages.roupas.casacos.leatherOvercoat.back,
        ],
      };
    default:
      return null;
  }
});

const currentIndex = ref(0);
const currentImage = computed(() => product.value?.images?.[currentIndex.value]);

const sizes = ['PP', 'P', 'M', 'G', 'GG'];
const selectedSize = ref('');

const zip = ref('');
const shippingResult = ref('');
const calcShipping = () => {
  if (!zip.value) return;
  shippingResult.value = `Frete estimado para ${zip.value}: R$ 24,90 - 5 a 8 dias úteis`;
};

const addToCart = () => {
  if (!product.value) return;
  alert(`Adicionado: ${t(product.value.title)} - Tam: ${selectedSize.value}`);
  router.push('/roupas');
};
</script>

<style lang="scss">
@use './ProductDetail.scss';
</style>



<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  product: { type: Object, default: null },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

const currentIndex = ref(0);

watch(
  () => props.product,
  () => {
    currentIndex.value = 0;
  }
);

const images = computed(
  () =>
    props.product?.images ||
    (props.product?.imageUrl ? [props.product.imageUrl] : [])
);
const currentImage = computed(() => images.value[currentIndex.value]);

const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <teleport to="body">
    <div v-if="isOpen" class="product-modal" @click.self="close">
      <div class="product-modal__dialog" role="dialog" aria-modal="true">
        <button class="product-modal__close" aria-label="fechar" @click="close">
          ×
        </button>
        <div class="product-modal__content">
          <div class="product-modal__gallery">
            <img
              class="product-modal__image"
              :src="currentImage"
              :alt="product?.title"
            />
            <div v-if="images.length > 1" class="product-modal__thumbs">
              <button
                v-for="(img, i) in images"
                :key="i"
                class="product-modal__thumb"
                :class="{ 'is-active': i === currentIndex }"
                @click="currentIndex = i"
              >
                <img :src="img" :alt="`${product?.title} ${i + 1}`" />
              </button>
            </div>
          </div>
          <div class="product-modal__info">
            <h3 class="product-modal__title">{{ product?.title }}</h3>
            <div class="product-modal__price">
              R$ {{ Number(product?.price).toFixed(2) }}
            </div>
            <p class="product-modal__desc">
              Veja mais fotos deste produto. Ideal para conferir detalhes antes
              de decidir.
            </p>
            <div class="product-modal__actions">
              <button class="btn btn-primary">ver detalhes</button>
              <button class="btn">fechar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style src="./ProductModal.scss" lang="scss" scoped></style>

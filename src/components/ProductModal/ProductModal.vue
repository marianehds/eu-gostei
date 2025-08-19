<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "../../i18n.js";
import { useCurrency } from "../../store/currency";
import ArrowButton from "./ArrowButton/ArrowButton.vue";

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
const isHovering = ref(false);

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

const nextImage = () => {
  if (images.value.length > 1) {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }
};

const prevImage = () => {
  if (images.value.length > 1) {
    currentIndex.value = currentIndex.value === 0 
      ? images.value.length - 1 
      : currentIndex.value - 1;
  }
};

// Keyboard navigation
const handleKeydown = (event) => {
  if (!isOpen.value || images.value.length <= 1) return;
  
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      prevImage();
      break;
    case 'ArrowRight':
      event.preventDefault();
      nextImage();
      break;
    case 'Escape':
      close();
      break;
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
});

const { t } = useI18n();
const { formatPrice } = useCurrency();
</script>

<template>
  <teleport to="body">
    <div v-if="isOpen" class="product-modal" @click.self="close">
      <div class="product-modal__dialog" role="dialog" aria-modal="true">
        <button class="product-modal__close" :aria-label="t('app.modal.closeAria')" @click="close">
          ×
        </button>
        <div class="product-modal__content">
          <div class="product-modal__gallery">
            <div 
              class="product-modal__image-container"
              @mouseenter="isHovering = true"
              @mouseleave="isHovering = false"
            >
              <img
                class="product-modal__image"
                :src="currentImage"
                :alt="product?.title"
              />
              
              <!-- Navigation Arrows (only visible on hover and when multiple images) -->
              <div v-if="images.length > 1 && isHovering" class="product-modal__navigation">
                <ArrowButton
                  direction="prev"
                  :aria-label="t('app.modal.previousImage')"
                  @click="prevImage"
                />
                <ArrowButton
                  direction="next"
                  :aria-label="t('app.modal.nextImage')"
                  @click="nextImage"
                />
              </div>
              
              <!-- Image Counter -->
              <div v-if="images.length > 1" class="product-modal__counter">
                {{ currentIndex + 1 }} / {{ images.length }}
              </div>
            </div>
            
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
              {{ formatPrice(product?.price) }}
            </div>
            <p class="product-modal__desc">
              {{ t('app.modal.desc') }}
            </p>
            <div class="product-modal__actions">
              <button class="btn btn-primary">{{ t('app.modal.details') }}</button>
              <button class="btn" @click="close">{{ t('app.modal.close') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style src="./ProductModal.scss" lang="scss" scoped></style>

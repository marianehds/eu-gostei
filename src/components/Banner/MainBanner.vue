<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import PaginationDots from "./Pagination/PaginationDots.vue";
import { useI18n } from "../../i18n.js";
import { bannerImages } from "../../assets/images/index.js";

const { t } = useI18n();
const slides = [
  {
    title: t('app.banner.slides.0.title'),
    desc: t('app.banner.slides.0.desc'),
    cta: t('app.banner.slides.0.cta'),
    image: bannerImages.bolsas,
  },
  {
    title: t('app.banner.slides.1.title'),
    desc: t('app.banner.slides.1.desc'),
    cta: t('app.banner.slides.1.cta'),
    image: bannerImages.relogio,
  },
  {
    title: t('app.banner.slides.2.title'),
    desc: t('app.banner.slides.2.desc'),
    cta: t('app.banner.slides.2.cta'),
    image: bannerImages.tablet,
  },
];
const index = ref(0);
let timer;
onMounted(() => {
  timer = setInterval(() => {
    index.value = (index.value + 1) % slides.length;
  }, 5000);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <section class="main-banner">
    <div class="main-banner__container">
      <div class="main-banner__visual">
        <img class="main-banner__image" :src="slides[index].image" :alt="slides[index].title" />
      </div>
      <div class="main-banner__copy">
        <h2 class="main-banner__title">{{ slides[index].title }}</h2>
        <p class="main-banner__desc">{{ slides[index].desc }}</p>
        <button class="main-banner__cta">{{ slides[index].cta }}</button>
      </div>
    </div>

    <div class="main-banner__dots">
      <PaginationDots :total="slides.length" :current="index" @update:current="(v)=> index = v" />
    </div>
  </section>
</template>

<style lang="scss">
@use "./MainBanner.scss";
</style>
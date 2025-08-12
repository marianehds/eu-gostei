<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import PaginationDots from "./Pagination/PaginationDots.vue";

const slides = [
  {
    title: "Bolsas e mochilas",
    desc: "junto com você em todos os momentos",
    cta: "ver opções",
    image: "/images/banners/bolsas.png",
  },
  {
    title: "Relógios",
    desc: "Decorações para deixar seu lar com a sua personalidade",
    cta: "não perde a hora ein!",
    image: "/images/banners/relogio.png",
  },
  {
    title: "Eletrônicos",
    desc: "dispositivos e cases",
    cta: "te conto onde",
    image: "/images/banners/tablet.png",
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

<style src="./MainBanner.scss" lang="scss" scoped></style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = [
  {
    title: "um passeio sem pressa",
    desc: "o que o fim de semana pede",
    cta: "te conto onde",
  },
  {
    title: "renovando as energias",
    desc: "fazendo aquela limpa no armário",
    cta: "ver dicas",
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
        <div
          class="main-banner__art"
          :style="{
            background:
              index === 0
                ? 'linear-gradient(135deg,#ff6ec4,#7873f5)'
                : 'linear-gradient(135deg,#f6d365,#fda085)',
          }"
        ></div>
      </div>
      <div class="main-banner__copy">
        <h2 class="main-banner__title">{{ slides[index].title }}</h2>
        <p class="main-banner__desc">{{ slides[index].desc }}</p>
        <button class="main-banner__cta">{{ slides[index].cta }}</button>
        <div class="main-banner__dots">
          <button
            v-for="(s, i) in slides"
            :key="i"
            class="main-banner__dot"
            :class="{ 'main-banner__dot--active': i === index }"
            @click="index = i"
            aria-label="ir para slide"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./MainBanner.scss" lang="scss" scoped></style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  { title: 'um passeio sem pressa', desc: 'o que o fim de semana pede', cta: 'te conto onde' },
  { title: 'renovando as energias', desc: 'fazendo aquela limpa no armário', cta: 'ver dicas' },
]
const index = ref(0)
let timer
onMounted(()=>{ timer = setInterval(()=>{ index.value = (index.value+1)%slides.length }, 5000) })
onBeforeUnmount(()=> clearInterval(timer))
</script>

<template>
  <section class="main-banner">
    <div class="main-banner__container">
      <div class="main-banner__visual">
        <div class="main-banner__art" :style="{ background: index===0 ? 'linear-gradient(135deg,#ff6ec4,#7873f5)' : 'linear-gradient(135deg,#f6d365,#fda085)'}"></div>
      </div>
      <div class="main-banner__copy">
        <h2 class="main-banner__title">{{ slides[index].title }}</h2>
        <p class="main-banner__desc">{{ slides[index].desc }}</p>
        <button class="main-banner__cta">{{ slides[index].cta }}</button>
        <div class="main-banner__dots">
          <button
            v-for="(s,i) in slides"
            :key="i"
            class="main-banner__dot"
            :class="{ 'main-banner__dot--active': i===index }"
            @click="index=i"
            aria-label="ir para slide"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.main-banner {
  padding:$space-6 $space-6 0; background:#fff;

  &__container { max-width:$container-max; margin:0 auto; display:grid; grid-template-columns:2fr 1fr; gap:$space-5; align-items:center; }
  &__visual { height:280px; border-radius:16px; overflow:hidden; }
  &__art { width:100%; height:100%; border-radius:16px; }

  &__title { margin:0 0 $space-2; font-size:28px; }
  &__desc { margin:0 0 $space-3; color:#555; }
  &__cta { background:$color-primary; color:#fff; border:none; border-radius:$radius-pill; padding:$space-3 $space-4; cursor:pointer; }

  &__dots { display:flex; gap:6px; margin-top:10px; }
  &__dot { width:8px; height:8px; border-radius:$radius-pill; border:none; background:#ddd; cursor:pointer; }
  &__dot--active { background:$color-primary; }

  @media (max-width: 900px) {
    &__container { grid-template-columns:1fr; }
    &__visual { order:-1; height:200px; }
  }
}
</style> 
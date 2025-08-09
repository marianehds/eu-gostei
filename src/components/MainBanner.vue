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

<style scoped>
.main-banner{padding:20px 20px 0;background:#fff}
.main-banner__container{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr;gap:20px;align-items:center}
.main-banner__visual{height:280px;border-radius:16px;overflow:hidden}
.main-banner__art{width:100%;height:100%;border-radius:16px}
.main-banner__title{margin:0 0 8px;font-size:28px}
.main-banner__desc{margin:0 0 12px;color:#555}
.main-banner__cta{background:#7a2eff;color:#fff;border:none;border-radius:999px;padding:10px 16px;cursor:pointer}
.main-banner__dots{display:flex;gap:6px;margin-top:10px}
.main-banner__dot{width:8px;height:8px;border-radius:999px;border:none;background:#ddd;cursor:pointer}
.main-banner__dot--active{background:#7a2eff}
@media (max-width: 900px){
  .main-banner__container{grid-template-columns:1fr}
  .main-banner__visual{order:-1;height:200px}
}
</style> 
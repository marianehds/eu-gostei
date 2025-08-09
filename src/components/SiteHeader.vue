<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const onSubmit = () => {}
</script>

<template>
  <header class="site-header">
    <div class="site-header__topnote">projeto de estudo — inspirado em experiências de e-commerce</div>
    <div class="site-header__bar">
      <a class="site-header__brand" href="#">
        <span class="site-header__brand-icon">eg</span>
        <span class="site-header__brand-name">eu gostei</span>
      </a>
      <form class="site-header__search" @submit.prevent="onSubmit">
        <input class="site-header__search-input" v-model="searchQuery" type="search" placeholder='busque "jaqueta", "calça", ...' />
        <button class="site-header__search-button" aria-label="buscar">🔍</button>
      </form>
      <nav class="site-header__actions">
        <button class="site-header__action site-header__action--link">entrar</button>
        <button class="site-header__action site-header__action--primary">quero vender</button>
      </nav>
    </div>
    <nav class="site-header__nav">
      <a class="site-header__nav-link" href="#">roupas</a>
      <a class="site-header__nav-link" href="#">calçados</a>
      <a class="site-header__nav-link" href="#">acessórios</a>
      <a class="site-header__nav-link" href="#">outros</a>
    </nav>
  </header>
</template>

<style scoped>
.site-header{position:sticky;top:0;background:#fff;z-index:10;border-bottom:1px solid #eee}
.site-header__topnote{background:#f7f1ff;color:#7a2eff;text-align:center;font-size:12px;padding:6px 8px}
.site-header__bar{display:flex;gap:16px;align-items:center;justify-content:space-between;padding:16px 20px;max-width:1200px;margin:0 auto}
.site-header__brand{display:flex;align-items:center;gap:8px;color:#111}
.site-header__brand-icon{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;background:#7a2eff;color:#fff;font-weight:700;text-transform:lowercase}
.site-header__brand-name{text-transform:lowercase;font-weight:700;letter-spacing:0.3px}
.site-header__search{flex:1;display:flex;gap:8px;max-width:720px;margin:0 12px}
.site-header__search-input{flex:1;padding:10px 12px;border:1px solid #ddd;border-radius:999px;font-size:14px;background:#fafafa}
.site-header__search-button{border-radius:999px;border:1px solid #ddd;background:#fff;padding:8px 12px;cursor:pointer}
.site-header__actions{display:flex;align-items:center;gap:8px}
.site-header__action{padding:8px 10px;cursor:pointer}
.site-header__action--link{background:transparent;border:none;color:#7a2eff}
.site-header__action--primary{background:#7a2eff;border:1px solid #6b24ff;color:#fff;border-radius:999px;padding:8px 14px}
.site-header__nav{display:flex;gap:16px;max-width:1200px;margin:0 auto;padding:0 20px 12px}
.site-header__nav-link{color:#666;text-decoration:none;font-size:14px}
.site-header__nav-link:hover{color:#111}
@media (max-width: 800px){
  .site-header__bar{flex-wrap:wrap;gap:10px}
  .site-header__actions{margin-left:auto}
  .site-header__nav{overflow-x:auto;white-space:nowrap;padding-bottom:10px}
}
</style> 
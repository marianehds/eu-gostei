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

<style lang="scss" scoped>
@use '../styles/variables' as *;

.site-header {
  position: sticky; top: 0; background: #fff; z-index: 10; border-bottom: 1px solid $color-border;

  &__topnote { background:#f7f1ff; color:$color-primary; text-align:center; font-size:12px; padding:$space-1 $space-2; }

  &__bar { display:flex; gap:$space-5; align-items:center; justify-content:space-between; padding:$space-6 $space-6; max-width:$container-max; margin:0 auto; }

  &__brand { display:flex; align-items:center; gap:$space-2; color:#111; text-decoration:none; }
  &__brand-icon { display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:$radius-pill; background:$color-primary; color:#fff; font-weight:700; text-transform:lowercase; }
  &__brand-name { text-transform:lowercase; font-weight:700; letter-spacing:0.3px; }

  &__search { flex:1; display:flex; gap:$space-2; max-width:720px; margin:0 $space-3; }
  &__search-input { flex:1; padding:$space-3 $space-4; border:1px solid #ddd; border-radius:$radius-pill; font-size:14px; background:#fafafa; }
  &__search-button { border-radius:$radius-pill; border:1px solid #ddd; background:#fff; padding:$space-2 $space-3; cursor:pointer; }

  &__actions { display:flex; align-items:center; gap:$space-2; }
  &__action { padding:$space-2 $space-3; cursor:pointer; }
  &__action--link { background:transparent; border:none; color:$color-primary; }
  &__action--primary { background:$color-primary; border:1px solid $color-primary-dark; color:#fff; border-radius:$radius-pill; padding:$space-2 $space-4; }

  &__nav { display:flex; gap:$space-5; max-width:$container-max; margin:0 auto; padding:0 $space-6 $space-3; }
  &__nav-link { color:$color-muted; text-decoration:none; font-size:14px; &:hover{ color:#111; } }

  @media (max-width: 800px) {
    &__bar { flex-wrap:wrap; gap:$space-3; }
    &__actions { margin-left:auto; }
    &__nav { overflow-x:auto; white-space:nowrap; padding-bottom:$space-3; }
  }
}
</style> 
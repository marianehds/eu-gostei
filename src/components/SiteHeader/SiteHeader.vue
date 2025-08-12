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

<style src="./SiteHeader.scss" lang="scss" scoped></style>

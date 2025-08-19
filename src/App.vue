<script setup>
import SiteHeader from "./components/SiteHeader/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter/SiteFooter.vue";
</script>

<template>
  <div id="app">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<style lang="scss" scoped>
@use "./styles/variables" as *;

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-height: 0;
}
</style>

<script setup>
import { useI18n } from "../../i18n.js";
const { t } = useI18n();
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__container">
      <p class="site-footer__text">{{ t('app.footer.text') }} {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
  </template>

<style src="./SiteFooter.scss" lang="scss" scoped></style>

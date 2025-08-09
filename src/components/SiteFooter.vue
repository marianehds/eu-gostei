<template>
  <footer class="site-footer">
    <div class="site-footer__container">
      <p class="site-footer__text">Projeto de estudo “Eu Gostei”. Sem afiliação. © {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.site-footer {
  margin-top:40px; border-top:1px solid $color-border; background:#fafafa;
  &__container { max-width:$container-max; margin:0 auto; padding:$space-6; }
  &__text { margin:0; color:$color-muted; font-size:14px; }
}
</style> 
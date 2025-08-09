<template>
  <footer class="site-footer">
    <div class="site-footer__container">
      <p class="site-footer__text">Projeto de estudo “Eu Gostei”. Sem afiliação. © {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer{margin-top:40px;border-top:1px solid #eee;background:#fafafa}
.site-footer__container{max-width:1200px;margin:0 auto;padding:20px}
.site-footer__text{margin:0;color:#666;font-size:14px}
</style> 
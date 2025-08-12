# Imagens de Produtos (versionadas)

Use esta pasta quando quiser importar imagens localmente nos componentes, com benefícios de otimização do Vite (hash, cache busting, compressão em build).

Exemplos de uso:

```vue
<script setup>
import cameraImg from '@/assets/products/camera-01.jpg'
</script>

<template>
  <img :src="cameraImg" alt="Câmera" />
</template>
```

Observação: arquivos em `src/assets/` passam pelo pipeline do Vite (hash nos nomes de arquivo no build).

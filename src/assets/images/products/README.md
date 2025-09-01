# Imagens de Produtos

Coloque aqui imagens que precisam ser importadas no código Vue/JavaScript.

## Como referenciar:

### 1. Import direto no componente:
```javascript
import minhaImagem from '@/assets/images/products/minha-imagem.jpg';

// No template:
<img :src="minhaImagem" alt="Produto" />
```

### 2. Via arquivo de configuração (recomendado):
```javascript
import { productImages } from '@/assets/images/index.js';

// No template:
<img :src="productImages.roupas.jaquetas.bomberJacket.front" alt="Jaqueta" />
```

## Observação:
Arquivos em `assets/` passam por processamento do Vite (com hash) e devem ser importados, não referenciados via URL direta.

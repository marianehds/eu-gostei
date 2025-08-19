# Estrutura do Projeto Vue 3

Este projeto segue as melhores práticas do Vue 3 com Composition API e uma arquitetura modular bem organizada.

## 📁 Estrutura de Pastas

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Banner/          # Componentes de banner
│   ├── Breadcrumb/      # Navegação breadcrumb
│   ├── CategoryFilters/ # Filtros de categoria
│   ├── FilterOptions/   # Opções de filtro
│   ├── ProductCard/     # Card de produto
│   ├── ProductModal/    # Modal de produto
│   ├── ProductShelf/    # Prateleira de produtos
│   ├── SiteHeader/      # Cabeçalho do site
│   ├── SiteFooter/      # Rodapé do site
│   └── index.js         # Exportações centralizadas
├── composables/         # Composables (lógica reutilizável)
│   ├── useRoupasData.js # Lógica de dados da página roupas
│   ├── useBreadcrumb.js # Lógica de breadcrumb
│   └── index.js         # Exportações centralizadas
├── views/               # Páginas/Views
│   ├── home/           # Página inicial
│   └── roupas/         # Página de roupas
├── locales/            # Arquivos de internacionalização
│   └── pt-br/          # Locale português brasileiro
├── styles/             # Estilos globais
├── data/               # Dados estáticos
├── store/              # Gerenciamento de estado
├── assets/             # Recursos estáticos
└── i18n.js             # Configuração de i18n
```

## 🧩 Componentes

### Componentes de Navegação
- **Breadcrumb**: Navegação breadcrumb dinâmica
- **SiteHeader**: Cabeçalho com navegação e busca
- **SiteFooter**: Rodapé do site

### Componentes de Produto
- **ProductCard**: Card individual de produto
- **ProductShelf**: Prateleira de produtos
- **ProductModal**: Modal de detalhes do produto

### Componentes de Filtro
- **CategoryFilters**: Filtros de categoria com imagens
- **FilterOptions**: Opções de filtro avançadas

### Componentes de Banner
- **MainBanner**: Banner principal com carrossel

## 🔧 Composables

### useRoupasData
Gerencia toda a lógica de dados da página de roupas:
- Estado das categorias selecionadas
- Filtros aplicados
- Produtos e filtragem
- Métodos para manipulação de dados

### useBreadcrumb
Gerencia a lógica do breadcrumb:
- Geração dinâmica de itens
- Navegação baseada em categoria

## 📱 Views

### HomePage
Página inicial com banner e prateleiras de produtos.

### RoupasPage
Página de roupas com:
- Breadcrumb dinâmico
- Filtros de categoria
- Opções de filtro
- Prateleira de produtos
- Modal de produto

## 🌐 Internacionalização

Sistema modular de i18n organizado por:
- **Componentes**: Strings específicas de cada componente
- **Views**: Strings específicas de cada página
- **Estrutura hierárquica**: Organização lógica das traduções

## 🎨 Estilos

- **SCSS**: Pré-processador CSS
- **Variáveis**: Sistema de design tokens
- **Componentes**: Estilos encapsulados por componente
- **Responsivo**: Design mobile-first

## 🚀 Melhores Práticas Implementadas

### Vue 3 Composition API
- Uso consistente de `setup()` script
- Composables para lógica reutilizável
- Reatividade com `ref()` e `computed()`

### Componentização
- Componentes pequenos e focados
- Props e emits bem definidos
- Reutilização máxima

### Organização
- Separação clara de responsabilidades
- Imports centralizados via index.js
- Estrutura escalável

### Performance
- Lazy loading de componentes
- Computed properties otimizadas
- Reatividade eficiente

## 📦 Como Usar

### Importar Componentes
```javascript
import { ProductCard, ProductShelf } from '@/components';
```

### Importar Composables
```javascript
import { useRoupasData } from '@/composables';
```

### Adicionar Novos Componentes
1. Criar pasta do componente em `src/components/`
2. Adicionar export no `src/components/index.js`
3. Seguir padrão de nomenclatura BEM para CSS

### Adicionar Novos Composables
1. Criar arquivo em `src/composables/`
2. Adicionar export no `src/composables/index.js`
3. Usar prefixo `use` para nomes de composables

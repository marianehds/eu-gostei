<template>
  <div class="roupas-page">
    <!-- Breadcrumb Navigation -->
    <Breadcrumb :items="breadcrumbItems" @navigate="handleBreadcrumbNavigation" />

    <!-- Category Filters -->
    <section class="category-filters">
      <div class="category-filters__container">
        <div 
          v-for="category in categories" 
          :key="category.id"
          @click="selectCategory(category.id)"
          class="category-filter"
          :class="{ 'is-active': selectedCategory === category.id }"
        >
          <div class="category-filter__image">
            <img :src="category.image" :alt="category.label" />
          </div>
          <span class="category-filter__label">{{ category.label }}</span>
        </div>
      </div>
    </section>

    <!-- Filter Options -->
    <section class="filter-options">
      <div class="filter-options__container">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="toggleFilter(filter.id)"
          class="filter-option"
          :class="{ 
            'is-active': selectedFilters.includes(filter.id),
            'is-highlighted': filter.active 
          }"
        >
          {{ filter.label }}
          <svg class="filter-option__arrow" width="12" height="12" viewBox="0 0 12 12">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="products-grid">
      <div class="products-grid__container">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="product-card"
        >
          <div class="product-card__image">
            <img :src="product.image" :alt="product.name" />
            <div class="product-card__discount" v-if="product.discount">
              {{ product.discount }}%
            </div>
          </div>
          <div class="product-card__info">
            <h3 class="product-card__name">{{ product.name }}</h3>
            <div class="product-card__price">
              <span class="product-card__current-price">R$ {{ product.price }}</span>
              <span class="product-card__original-price">R$ {{ product.originalPrice }}</span>
            </div>
            <span class="product-card__condition">{{ product.condition }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from '../i18n.js';
import Breadcrumb from './Breadcrumb/Breadcrumb.vue';

const router = useRouter();
const { t } = useI18n();

// Selected category state
const selectedCategory = ref(null);

// Computed breadcrumb items that update based on selected category
const breadcrumbItems = computed(() => {
  const items = [
    { label: t('app.breadcrumb.home'), path: '/' },
    { label: t('app.breadcrumb.clothes'), path: '/roupas' }
  ];
  
  if (selectedCategory.value) {
    items.push({ 
      label: t(`app.roupas.categories.${selectedCategory.value}`), 
      path: `/roupas/${selectedCategory.value}`, 
      active: true 
    });
  }
  
  return items;
});

// Category filters with images
const categories = [
  { id: 'casacos', label: t('app.roupas.categories.casacos'), image: '/images/categories/casacos.jpg' },
  { id: 'jaquetas', label: t('app.roupas.categories.jaquetas'), image: '/images/categories/jaquetas.jpg' },
  { id: 'calcas', label: t('app.roupas.categories.calcas'), image: '/images/categories/calcas.jpg' },
  { id: 'vestidos', label: t('app.roupas.categories.vestidos'), image: '/images/categories/vestidos.jpg' }
];

// Filter options
const filters = [
  { id: 'relevancia', label: t('app.roupas.filters.mostRelevant'), active: true },
  { id: 'tipo-loja', label: t('app.roupas.filters.storeType') },
  { id: 'categoria', label: t('app.roupas.filters.category') },
  { id: 'marca', label: t('app.roupas.filters.brand') },
  { id: 'tamanho', label: t('app.roupas.filters.size') },
  { id: 'preco', label: t('app.roupas.filters.price') },
  { id: 'novidades', label: t('app.roupas.filters.newArrivals') },
  { id: 'condicao', label: t('app.roupas.filters.condition') },
  { id: 'regioes', label: t('app.roupas.filters.nearbyRegions'), active: true }
];

const selectedFilters = ref(['relevancia', 'regioes']);

const handleBreadcrumbNavigation = (item) => {
  if (item.path === '/roupas') {
    // Se clicar em "roupas", limpa a categoria selecionada
    selectedCategory.value = null;
  } else {
    router.push(item.path);
  }
};

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  // Aqui você pode adicionar lógica para filtrar produtos
};

const toggleFilter = (filterId) => {
  const index = selectedFilters.value.indexOf(filterId);
  if (index > -1) {
    selectedFilters.value.splice(index, 1);
  } else {
    selectedFilters.value.push(filterId);
  }
};

// Sample products data
const products = [
  {
    id: 1,
    name: t('app.roupas.products.jacketDenim'),
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: '/images/products/jaqueta-denim.jpg',
    condition: t('app.roupas.conditions.used')
  },
  {
    id: 2,
    name: t('app.roupas.products.woolCoat'),
    price: 85,
    originalPrice: 120,
    discount: 29,
    image: '/images/products/casaco-la.jpg',
    condition: t('app.roupas.conditions.new')
  },
  {
    id: 3,
    name: t('app.roupas.products.bomberJacket'),
    price: 95,
    originalPrice: 180,
    discount: 47,
    image: '/images/products/jaqueta-bomber.jpg',
    condition: t('app.roupas.conditions.used')
  },
  {
    id: 4,
    name: t('app.roupas.products.elegantCoat'),
    price: 200,
    originalPrice: 350,
    discount: 43,
    image: '/images/products/sobretudo.jpg',
    condition: t('app.roupas.conditions.new')
  },
  {
    id: 5,
    name: t('app.roupas.products.knitCardigan'),
    price: 65,
    originalPrice: 80,
    discount: 19,
    image: '/images/products/cardigan.jpg',
    condition: t('app.roupas.conditions.used')
  },
  {
    id: 6,
    name: t('app.roupas.products.waterproofParka'),
    price: 150,
    originalPrice: 250,
    discount: 40,
    image: '/images/products/parka.jpg',
    condition: t('app.roupas.conditions.new')
  }
];
</script>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.roupas-page {
  padding: $space-4;
  max-width: $container-max;
  margin: 0 auto;
}

// Category Filters Styles
.category-filters {
  margin-bottom: $space-5;
  
  &__container {
    display: flex;
    gap: $space-3;
    overflow-x: auto;
    padding-bottom: $space-2;
  }
}

.category-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &.is-active {
    .category-filter__label {
      color: $color-primary;
      font-weight: 600;
    }
  }
  
  &__image {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: $space-2;
    background: #f5f5f5;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__label {
    font-size: 12px;
    text-align: center;
    color: #666;
    transition: color 0.2s ease;
  }
}

// Filter Options Styles
.filter-options {
  margin-bottom: $space-5;
  
  &__container {
    display: flex;
    gap: $space-2;
    flex-wrap: wrap;
  }
}

.filter-option {
  display: flex;
  align-items: center;
  gap: $space-1;
  padding: $space-2 $space-3;
  border: 1px solid #ddd;
  border-radius: $radius-pill;
  background: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: $color-primary;
  }
  
  &.is-active {
    background: $color-primary;
    color: white;
    border-color: $color-primary;
  }
  
  &.is-highlighted {
    border-color: $color-primary;
    color: $color-primary;
  }
  
  &__arrow {
    transition: transform 0.2s ease;
  }
  
  &:hover &__arrow {
    transform: rotate(180deg);
  }
}

// Products Grid Styles
.products-grid {
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: $space-4;
  }
}

.product-card {
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  
  &__image {
    position: relative;
    height: 200px;
    background: #f5f5f5;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__discount {
    position: absolute;
    top: $space-2;
    left: $space-2;
    background: #4CAF50;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }
  
  &__info {
    padding: $space-3;
  }
  
  &__name {
    margin: 0 0 $space-2;
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
  
  &__price {
    display: flex;
    align-items: center;
    gap: $space-2;
    margin-bottom: $space-1;
  }
  
  &__current-price {
    font-weight: 600;
    color: #333;
  }
  
  &__original-price {
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
  }
  
  &__condition {
    font-size: 12px;
    color: #666;
    text-transform: capitalize;
  }
}

@media (max-width: 768px) {
  .roupas-page {
    padding: $space-3;
  }
  
  .category-filters__container {
    gap: $space-2;
  }
  
  .category-filter {
    min-width: 70px;
    
    &__image {
      width: 50px;
      height: 50px;
    }
    
    &__label {
      font-size: 11px;
    }
  }
  
  .filter-options__container {
    gap: $space-1;
  }
  
  .filter-option {
    padding: $space-1 $space-2;
    font-size: 12px;
  }
  
  .products-grid__container {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: $space-3;
  }
}
</style>

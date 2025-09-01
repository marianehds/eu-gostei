
<template>
  <div class="roupas-page">
    <!-- Breadcrumb Navigation -->
    <Breadcrumb
      :items="breadcrumbItems"
      @navigate="handleBreadcrumbNavigation"
    />

    <!-- Category Filters -->
    <CategoryFilters
      :categories="categories"
      :selected-category="selectedCategory"
      @select="selectCategory"
    />

    <!-- Filter Options -->
    <FilterOptions
      :filters="filters"
      :selected-filters="selectedFilters"
      @toggle="toggleFilter"
    />

    <!-- Products Shelf / Empty State -->
    <template v-if="filteredProducts.length">
      <ProductShelf
        :title="t('app.roupas.products.title')"
        :subtitle="t('app.roupas.products.subtitle')"
        :products="filteredProducts"
        @select="openProduct"
      />
    </template>
    <template v-else>
      <div class="roupas-page__empty">
        <img :src="notFoundImg" alt="Nenhum produto encontrado" />
      </div>
    </template>

    <!-- Product Modal -->
    <ProductModal v-model="isModalOpen" :product="selectedProduct" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "../../i18n.js";
import { useRoupasData, useBreadcrumb } from "../../composables/index.js";
import { 
  Breadcrumb, 
  CategoryFilters, 
  FilterOptions, 
  ProductShelf, 
  ProductModal 
} from "../../components/index.js";
import notFoundImg from "../../assets/images/notFound/notFound.PNG";

const router = useRouter();
const { t } = useI18n();

// Product modal state
const selectedProduct = ref(null);
const isModalOpen = ref(false);

// Use composables
const {
  selectedCategory,
  selectedFilters,
  categories,
  filters,
  filteredProducts,
  selectCategory,
  toggleFilter,
  clearCategory,
} = useRoupasData();

const { breadcrumbItems } = useBreadcrumb(selectedCategory);

// Event handlers
const handleBreadcrumbNavigation = (item) => {
  if (item.path === "/roupas") {
    // Se clicar em "roupas", limpa a categoria selecionada
    clearCategory();
  } else {
    router.push(item.path);
  }
};

const openProduct = (product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
};
</script>

<style lang="scss">
@use "./RoupasPage.scss";
</style>

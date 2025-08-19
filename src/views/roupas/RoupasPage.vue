
<template>
  <div class="roupas-page">
    <!-- Breadcrumb Navigation -->
    <Breadcrumb
      :items="breadcrumbItems"
      @navigate="handleBreadcrumbNavigation"
    />

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
            'is-highlighted': filter.active,
          }"
        >
          {{ filter.label }}
          <svg
            class="filter-option__arrow"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              stroke-width="1.5"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </section>

    <!-- Products Shelf -->
    <ProductShelf
      :title="t('app.roupas.products.title')"
      :subtitle="t('app.roupas.products.subtitle')"
      :products="filteredProducts"
      @select="openProduct"
    />

    <!-- Product Modal -->
    <ProductModal v-model="isModalOpen" :product="selectedProduct" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "../../i18n.js";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.vue";
import ProductShelf from "../../components/ProductShelf/ProductShelf.vue";
import ProductModal from "../../components/ProductModal/ProductModal.vue";

const router = useRouter();
const { t } = useI18n();

// Public base path for images
const publicBase = import.meta.env.BASE_URL;

// Selected category state
const selectedCategory = ref(null);
const selectedProduct = ref(null);
const isModalOpen = ref(false);

// Computed breadcrumb items that update based on selected category
const breadcrumbItems = computed(() => {
  const items = [
    { label: t("app.breadcrumb.home"), path: "/" },
    { label: t("app.breadcrumb.clothes"), path: "/roupas" },
  ];

  if (selectedCategory.value) {
    items.push({
      label: t(`app.roupas.categories.${selectedCategory.value}`),
      path: `/roupas/${selectedCategory.value}`,
      active: true,
    });
  }

  return items;
});

// Category filters with images
const categories = [
  {
    id: "casacos",
    label: t("app.roupas.categories.casacos"),
    image: `${publicBase}images/breadcrumb/casaco.png`,
  },
  {
    id: "jaquetas",
    label: t("app.roupas.categories.jaquetas"),
    image: `${publicBase}images/breadcrumb/jaqueta.png`,
  },
  {
    id: "calcas",
    label: t("app.roupas.categories.calcas"),
    image: `${publicBase}images/breadcrumb/calca.png`,
  },
  {
    id: "vestidos",
    label: t("app.roupas.categories.vestidos"),
    image: `${publicBase}images/breadcrumb/vestido.png`,
  },
];

// Filter options
const filters = [
  {
    id: "relevancia",
    label: t("app.roupas.filters.mostRelevant"),
    active: true,
  },
  { id: "tipo-loja", label: t("app.roupas.filters.storeType") },
  { id: "categoria", label: t("app.roupas.filters.category") },
  { id: "marca", label: t("app.roupas.filters.brand") },
  { id: "tamanho", label: t("app.roupas.filters.size") },
  { id: "preco", label: t("app.roupas.filters.price") },
  { id: "novidades", label: t("app.roupas.filters.newArrivals") },
  { id: "condicao", label: t("app.roupas.filters.condition") },
  { id: "regioes", label: t("app.roupas.filters.nearbyRegions"), active: true },
];

const selectedFilters = ref(["relevancia", "regioes"]);

// Sample products data
const products = [
  {
    id: 1,
    name: t("app.roupas.products.jacketDenim"),
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: "/images/products/jaqueta-denim.jpg",
    condition: t("app.roupas.conditions.used"),
  },
  {
    id: 2,
    name: t("app.roupas.products.woolCoat"),
    price: 85,
    originalPrice: 120,
    discount: 29,
    image: "/images/products/casaco-la.jpg",
    condition: t("app.roupas.conditions.new"),
  },
  {
    id: 3,
    name: t("app.roupas.products.bomberJacket"),
    price: 95,
    originalPrice: 180,
    discount: 47,
    image: "/images/products/jaqueta-bomber.jpg",
    condition: t("app.roupas.conditions.used"),
  },
  {
    id: 4,
    name: t("app.roupas.products.elegantCoat"),
    price: 200,
    originalPrice: 350,
    discount: 43,
    image: "/images/products/sobretudo.jpg",
    condition: t("app.roupas.conditions.new"),
  },
  {
    id: 5,
    name: t("app.roupas.products.knitCardigan"),
    price: 65,
    originalPrice: 80,
    discount: 19,
    image: "/images/products/cardigan.jpg",
    condition: t("app.roupas.conditions.used"),
  },
  {
    id: 6,
    name: t("app.roupas.products.waterproofParka"),
    price: 150,
    originalPrice: 250,
    discount: 40,
    image: "/images/products/parka.jpg",
    condition: t("app.roupas.conditions.new"),
  },
];

// Computed filtered products based on selected category
const filteredProducts = computed(() => {
  if (selectedCategory.value) {
    // Filter products based on category (you can implement more sophisticated filtering logic)
    return products.filter((product) => {
      const categoryKeywords = {
        casacos: ["casaco", "coat", "cardigan"],
        jaquetas: ["jaqueta", "jacket", "bomber"],
        calcas: ["calça", "pants", "trousers"],
        vestidos: ["vestido", "dress"],
      };

      const keywords = categoryKeywords[selectedCategory.value] || [];
      return keywords.some((keyword) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );
    });
  }
  return products;
});

const handleBreadcrumbNavigation = (item) => {
  if (item.path === "/roupas") {
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

const openProduct = (product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
};
</script>

<style src="./RoupasPage.scss" lang="scss" scoped></style>

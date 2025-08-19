import { ref, computed } from 'vue';
import { useI18n } from '../i18n.js';

export function useRoupasData() {
  const { t } = useI18n();
  
  // Public base path for images
  const publicBase = import.meta.env.BASE_URL;
  
  // State
  const selectedCategory = ref(null);
  const selectedFilters = ref(['relevancia', 'regioes']);
  
  // Category filters with images
  const categories = computed(() => [
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
  ]);
  
  // Filter options
  const filters = computed(() => [
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
  ]);
  
  // Sample products data with real images
  const products = computed(() => [
    {
      id: 1,
      name: t("app.roupas.products.jacketDenim"),
      price: 120,
      originalPrice: 150,
      discount: 20,
      image: `${publicBase}images/products/roupas/jaquetas/bomberJacket/image.png`,
      condition: t("app.roupas.conditions.used"),
    },
    {
      id: 2,
      name: t("app.roupas.products.woolCoat"),
      price: 85,
      originalPrice: 120,
      discount: 29,
      image: `${publicBase}images/products/roupas/Casacos/leatherOvercoat/front.png`,
      condition: t("app.roupas.conditions.new"),
    },
    {
      id: 3,
      name: t("app.roupas.products.bomberJacket"),
      price: 95,
      originalPrice: 180,
      discount: 47,
      image: `${publicBase}images/products/roupas/jaquetas/racingJacket/front.png`,
      condition: t("app.roupas.conditions.used"),
    },
    {
      id: 4,
      name: t("app.roupas.products.elegantCoat"),
      price: 200,
      originalPrice: 350,
      discount: 43,
      image: `${publicBase}images/products/roupas/blazer/blazerGrafite/front.png`,
      condition: t("app.roupas.conditions.new"),
    },
    {
      id: 5,
      name: t("app.roupas.products.knitCardigan"),
      price: 65,
      originalPrice: 80,
      discount: 19,
      image: `${publicBase}images/products/roupas/jaquetas/furryJacket/front.png`,
      condition: t("app.roupas.conditions.used"),
    },
    {
      id: 6,
      name: t("app.roupas.products.waterproofParka"),
      price: 150,
      originalPrice: 250,
      discount: 40,
      image: `${publicBase}images/products/roupas/jaquetas/racingJacket/back.png`,
      condition: t("app.roupas.conditions.new"),
    },
  ]);
  
  // Computed filtered products based on selected category
  const filteredProducts = computed(() => {
    if (selectedCategory.value) {
      return products.value.filter((product) => {
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
    return products.value;
  });
  
  // Methods
  const selectCategory = (categoryId) => {
    selectedCategory.value = categoryId;
  };
  
  const toggleFilter = (filterId) => {
    const index = selectedFilters.value.indexOf(filterId);
    if (index > -1) {
      selectedFilters.value.splice(index, 1);
    } else {
      selectedFilters.value.push(filterId);
    }
  };
  
  const clearCategory = () => {
    selectedCategory.value = null;
  };
  
  return {
    // State
    selectedCategory,
    selectedFilters,
    
    // Computed
    categories,
    filters,
    products,
    filteredProducts,
    
    // Methods
    selectCategory,
    toggleFilter,
    clearCategory,
  };
}

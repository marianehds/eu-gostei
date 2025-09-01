import { ref, computed } from 'vue';
import { useI18n } from '../i18n.js';
import { breadcrumbImages, productImages } from '../assets/images/index.js';
import { jackets as jacketsStore } from '../store/products.js';

export function useRoupasData() {
  const { t } = useI18n();
  
  // State
  const selectedCategory = ref(null);
  const selectedFilters = ref(['relevancia', 'regioes']);
  
  // Category filters with images
  const categories = computed(() => [
    {
      id: "casacos",
      label: t("app.roupas.categories.casacos"),
      image: breadcrumbImages.casaco,
    },
    {
      id: "jaquetas",
      label: t("app.roupas.categories.jaquetas"),
      image: breadcrumbImages.jaqueta,
    },
    {
      id: "calcas",
      label: t("app.roupas.categories.calcas"),
      image: breadcrumbImages.calca,
    },
    {
      id: "vestidos",
      label: t("app.roupas.categories.vestidos"),
      image: breadcrumbImages.vestido,
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
  
  // Produtos de roupas compostos a partir do store (ids/preços) + imagens + chaves de título
  const products = computed(() =>
    jacketsStore.map((p) => {
      switch (p.id) {
        case 'j1':
          return {
            id: p.id,
            title: 'app.products.roupas.blazer.blazerGrafite.title',
            category: 'casacos',
            price: p.price,
            imageUrl: productImages.roupas.blazer.blazerGrafite.front,
            images: [
              productImages.roupas.blazer.blazerGrafite.front,
              productImages.roupas.blazer.blazerGrafite.back,
            ],
          };
        case 'j2':
          return {
            id: p.id,
            title: 'app.products.roupas.jaquetas.bomberJacket.title',
            category: 'jaquetas',
            price: p.price,
            imageUrl: productImages.roupas.jaquetas.bomberJacket.image,
            images: [
              productImages.roupas.jaquetas.bomberJacket.image,
              productImages.roupas.jaquetas.bomberJacket.back,
            ],
          };
        case 'j3':
          return {
            id: p.id,
            title: 'app.products.roupas.jaquetas.furryJacket.title',
            category: 'jaquetas',
            price: p.price,
            imageUrl: productImages.roupas.jaquetas.furryJacket.front,
            images: [
              productImages.roupas.jaquetas.furryJacket.front,
              productImages.roupas.jaquetas.furryJacket.back,
            ],
          };
        case 'j5':
          return {
            id: p.id,
            title: 'app.products.roupas.casacos.leatherOvercoat.title',
            category: 'casacos',
            price: p.price,
            imageUrl: productImages.roupas.casacos.leatherOvercoat.front,
            images: [
              productImages.roupas.casacos.leatherOvercoat.front,
              productImages.roupas.casacos.leatherOvercoat.back,
            ],
          };
        default:
          return { id: p.id, price: p.price, title: '', category: '', imageUrl: '' };
      }
    })
  );
  
  // Computed filtered products based on selected category
  const filteredProducts = computed(() => {
    if (selectedCategory.value) {
      return products.value.filter((product) => product.category === selectedCategory.value);
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

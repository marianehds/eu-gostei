import { computed } from 'vue';
import { useI18n } from '../i18n.js';

export function useBreadcrumb(selectedCategory) {
  const { t } = useI18n();
  
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
  
  return {
    breadcrumbItems,
  };
}

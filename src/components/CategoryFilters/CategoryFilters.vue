<template>
  <section class="category-filters">
    <div class="category-filters__container">
      <div
        v-for="category in categories"
        :key="category.id"
        @click="$emit('select', category.id)"
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
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => []
  },
  selectedCategory: {
    type: String,
    default: null
  }
});

defineEmits(['select']);
</script>

<style lang="scss">
@use "./CategoryFilters.scss";
</style>
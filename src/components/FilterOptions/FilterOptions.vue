<template>
  <section class="filter-options">
    <div class="filter-options__container">
      <button
        v-for="filter in filters"
        :key="filter.id"
        @click="$emit('toggle', filter.id)"
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
</template>

<script setup>
defineProps({
  filters: {
    type: Array,
    required: true,
    default: () => []
  },
  selectedFilters: {
    type: Array,
    required: true,
    default: () => []
  }
});

defineEmits(['toggle']);
</script>

<style src="./FilterOptions.scss" lang="scss" scoped></style>

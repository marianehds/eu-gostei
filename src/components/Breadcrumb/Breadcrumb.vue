<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from '../../i18n.js';

const router = useRouter();
const { t } = useI18n();

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
});

const emit = defineEmits(['navigate']);

const navigateToBreadcrumb = (item) => {
  if (item.path && !item.active) {
    emit('navigate', item);
  }
};
</script>

<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li 
        v-for="(item, index) in items" 
        :key="index"
        class="breadcrumb__item"
      >
        <a 
          v-if="!item.active" 
          @click="navigateToBreadcrumb(item)"
          class="breadcrumb__link"
        >
          {{ item.label }}
        </a>
        <span v-else class="breadcrumb__current">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="breadcrumb__separator">></span>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.breadcrumb {
  margin-bottom: $space-4;
  
  &__list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  &__item {
    display: flex;
    align-items: center;
  }
  
  &__link {
    color: $color-primary;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  &__current {
    color: #666;
    font-weight: 500;
  }
  
  &__separator {
    margin: 0 $space-2;
    color: #ccc;
  }
}
</style>

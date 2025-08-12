<script setup>
const props = defineProps({
  total: { type: Number, required: true },
  current: { type: Number, default: 0 },
})

const emit = defineEmits(['update:current'])

const goTo = (index) => {
  emit('update:current', index)
}
</script>

<template>
  <div class="pagination-dots" role="tablist" aria-label="seleção de slide">
    <span
      v-for="(_, i) in Array.from({ length: total })"
      :key="i"
      class="pagination-dots__dot"
      :class="{ 'is-active': i === current }"
      @click="goTo(i)"
      :aria-label="`ir para slide ${i+1}`"
      :aria-current="i === current ? 'true' : undefined"
    />
  </div>
</template>

<style src="./PaginationDots.scss" lang="scss" scoped></style>

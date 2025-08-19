
<template>
  <button
    class="arrow-button"
    :class="[
      `arrow-button--${direction}`,
      { 'arrow-button--disabled': disabled },
    ]"
    @click="handleClick"
    :disabled="disabled"
    :aria-label="ariaLabel"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        v-if="direction === 'prev'"
      />
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        v-else
      />
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    required: true,
    validator: (value) => ["prev", "next"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit('click');
};
</script>

<style src="./ArrowButton.scss" lang="scss" scoped></style>

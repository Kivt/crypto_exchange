<template>
  <div class="base-error">
    <h2>{{ title }}</h2>

    <p>{{ text }}</p>

    <slot name="action"></slot>
  </div>
</template>

<script setup lang="ts">
const { text, title = 'Error' } = defineProps<{ text: string; title?: string }>()
</script>

<style scoped>
.base-error {
  border: 1px solid var(--error-border-color);
  background-color: var(--error-bg-color);
  padding: 2rem 1rem;
  border-radius: 0.75rem;
  text-align: center;
}

h2 {
  margin-top: 0;
}

p {
  font-size: medium;
}
</style>

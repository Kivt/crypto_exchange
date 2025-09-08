<template>
  <BaseErrorDisplay text="Can't find this page">
    <template #action>
      <RouterLink to="/">Back to homepage</RouterLink>
    </template>
  </BaseErrorDisplay>
</template>

<script setup lang="ts">
import BaseErrorDisplay from '@/components/BaseErrorDisplay.vue'
</script>

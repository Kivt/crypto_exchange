<template>
  <main>
    <h2>Exchange history</h2>

    <div v-if="!exchangeStore.exchangeHistory.length">No exchange history</div>

    <CurrencyExchangeHistory v-else :history="exchangeStore.exchangeHistory" />
  </main>
</template>

<script setup lang="ts">
import CurrencyExchangeHistory from '@/components/CurrencyExchangeHistory.vue'
import { useExchangeStore } from '@/stores/exchange'

const exchangeStore = useExchangeStore()
</script>

<template>
  <main>
    <h2>Exchange history</h2>

    <div v-if="!exchangeStore.exchangeHistory.length">No exchange history</div>

    <ExchangeHistoryTable v-else :history="exchangeStore.exchangeHistory" />
  </main>
</template>

<script setup lang="ts">
import ExchangeHistoryTable from '@/components/ExchangeHistoryTable.vue'
import { useExchangeStore } from '@/stores/exchange'

const exchangeStore = useExchangeStore()
</script>

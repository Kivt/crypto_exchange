import type { ExchangeRecord } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExchangeStore = defineStore('exchange', () => {
  const exchangeHistory = ref<ExchangeRecord[]>([])

  const addExchangeRecord = (record: ExchangeRecord) => {
    exchangeHistory.value.unshift(record)
  }

  return {
    exchangeHistory,
    addExchangeRecord,
  }
})

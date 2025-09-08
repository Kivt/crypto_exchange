import { ref } from 'vue'
import { defineStore } from 'pinia'
import pricesApi from '@/api/prices'
import type { CoinPrice } from '@/types'
import { AVAILABLE_COINS, AVAILABLE_CURRENCIES } from '@/types'

export const useCoinPriceStore = defineStore('coinPrice', () => {
  const prices = ref<CoinPrice | undefined>()

  const fetchPrices = async () => {
    const response = await pricesApi.fetchPrices<CoinPrice>(
      [...AVAILABLE_COINS],
      [...AVAILABLE_CURRENCIES],
    )
    prices.value = response.data
    return response.data
  }

  return { prices, fetchPrices }
})

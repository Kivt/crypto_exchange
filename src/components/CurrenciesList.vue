<template>
  <div class="currencies-table">
    <table>
      <thead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">USD price</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="coin in displayPrices" :key="coin.coin">
          <td>{{ coin.coin }} ({{ currencyMap[coin.coin] }})</td>
          <td>{{ coin.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">
import type { CoinPrice } from '@/types'
import { formatPrice } from '@/utils/priceFormatter'
import { currencyMap } from '@/utils/currency'
import { computed } from 'vue'

const { prices } = defineProps<{
  prices: CoinPrice
}>()

const displayPrices = computed(() => {
  const result: { coin: keyof CoinPrice; price: string }[] = []

  for (const key in prices) {
    const coin = key as keyof CoinPrice
    const price = prices[coin]
    result.push({ coin, price: formatPrice(price.usd) })
  }

  return result
})
</script>

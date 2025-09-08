<template>
  <div class="exchange">
    <label class="exchange__label">
      <span>From currency:</span>

      <select v-model="fromCurrency" name="fromCurrency" @change="handleAmountChange">
        <option v-for="coin in AVAILABLE_COINS" :key="coin" :value="coin">
          {{ currencyMap[coin] }}
        </option>
      </select>
    </label>

    <label class="exchange__label">
      <span>To currency:</span>

      <select v-model="toCurrency" name="toCurrency" @change="handleAmountChange">
        <option v-for="coin in AVAILABLE_COINS" :key="coin" :value="coin">
          {{ currencyMap[coin] }}
        </option>
      </select>
    </label>

    <label class="exchange__label">
      <span>Amount:</span>

      <input v-model="amount" type="number" name="amount" min="0" @input="onAmountChange" />
    </label>

    <div class="exchange__label--full">
      <span>Result:</span>
      <div class="exchange__result">{{ exchangeResult }} {{ currencyMap[toCurrency] }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CoinPrice, CoinId, ExchangeRecord } from '@/types'
import { AVAILABLE_COINS } from '@/types'
import { currencyMap } from '@/utils/currency'
import { ref } from 'vue'

const { prices, initValue } = defineProps<{
  prices: CoinPrice
  initValue?: ExchangeRecord
}>()
const emit = defineEmits<{
  save: [record: ExchangeRecord]
}>()

let debounceTimeout: number

const fromCurrency = ref<CoinId>('bitcoin')
const toCurrency = ref<CoinId>('ethereum')
const amount = ref(0)
const exchangeResult = ref(0)

if (initValue) {
  fromCurrency.value = initValue.from
  toCurrency.value = initValue.to
  exchangeResult.value = initValue.result
  amount.value = initValue.amount
}

const onAmountChange = () => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    handleAmountChange()
  }, 500)
}

const handleAmountChange = () => {
  if (fromCurrency.value === toCurrency.value) {
    exchangeResult.value = amount.value
    return
  }

  if (typeof amount.value !== 'number' || amount.value <= 0) {
    exchangeResult.value = 0
    return
  }

  const result = calculateExchangeResult()

  if (result) {
    exchangeResult.value = result.result
    emit('save', result)
  }
}

const calculateExchangeResult = (): ExchangeRecord | null => {
  const fromPrice = prices[fromCurrency.value].usd
  const toPrice = prices[toCurrency.value].usd
  const result = (fromPrice / toPrice) * amount.value

  return {
    from: fromCurrency.value,
    to: toCurrency.value,
    result,
    amount: amount.value,
    timestamp: Date.now(),
  }
}
</script>

<style scoped>
.exchange {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: stretch;
}

.exchange__label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 500;
}

.exchange__label--full {
  flex-basis: 100%;
}

.exchange__result {
  display: flex;
  flex: 1;
  align-items: center;
  font-weight: 600;
}

@media (min-width: 768px) {
  .exchange {
    flex-direction: row;
    gap: 2rem;
  }
}
</style>

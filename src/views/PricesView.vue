<template>
  <div v-if="isLoading && !coinPrices">Loading...</div>

  <BaseErrorDisplay v-else-if="error" :title="error.code" :text="error.message">
    <template #action>
      <BaseButton :is-loading="isLoading" @click="fetchPrices">
        Try loading prices again
      </BaseButton>
    </template>
  </BaseErrorDisplay>

  <template v-else-if="coinPrices">
    <div class="currencies__exchange-row">
      <div class="currencies__section">
        <h2>
          Prices

          <BaseButton :is-loading="isLoading" @click="fetchPrices"> Get latest rates </BaseButton>
        </h2>

        <CurrenciesList :prices="coinPrices" />
      </div>

      <div class="currencies__section">
        <h2>Exchange Form</h2>

        <CurrencyExchangeForm
          :prices="coinPrices"
          :init-value="exchangeStore.exchangeHistory[0]"
          @save="exchangeStore.addExchangeRecord"
        />
      </div>
    </div>
  </template>

  <BaseErrorDisplay v-else text="Error loading prices" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CurrenciesList from '@/components/CurrenciesList.vue'
import BaseErrorDisplay from '@/components/BaseErrorDisplay.vue'
import { useCoinPriceStore } from '@/stores/coinPrice'
import type { AxiosError } from 'axios'
import CurrencyExchangeForm from '@/components/CurrencyExchangeForm.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useExchangeStore } from '@/stores/exchange'

const coinPriceStore = useCoinPriceStore()
const exchangeStore = useExchangeStore()
const coinPrices = computed(() => coinPriceStore.prices)
const isLoading = ref(false)

const error = ref<AxiosError>()

const fetchPrices = async () => {
  try {
    isLoading.value = true
    await coinPriceStore.fetchPrices()
  } catch (e) {
    error.value = e as AxiosError
  } finally {
    isLoading.value = false
  }
}

if (!coinPriceStore.prices) {
  fetchPrices()
}
// Ideally WebSocket should be used to update prices dynamically
// but as coingecko don't have them price updated on button click
</script>

<style scoped>
.currencies__exchange-row {
  display: flex;
  gap: 3rem;
}

@media (max-width: 900px) {
  .currencies__exchange-row {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.currencies__section {
  flex: 1 1 0;
  min-width: 0;
}

h2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

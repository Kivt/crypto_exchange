<template>
  <BaseLoader v-if="isLoading && !coinPrices" />

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
import { computed } from 'vue'
import { useCoinPriceStore } from '@/stores/coinPrice'
import { useExchangeStore } from '@/stores/exchange'
import CurrenciesList from '@/components/CurrenciesList.vue'
import BaseErrorDisplay from '@/components/Base/BaseErrorDisplay.vue'
import CurrencyExchangeForm from '@/components/CurrencyExchangeForm.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseLoader from '@/components/Base/BaseLoader.vue'
import { useFetchRequest } from '@/composables/useFetchRequest'

const coinPriceStore = useCoinPriceStore()
const exchangeStore = useExchangeStore()
const coinPrices = computed(() => coinPriceStore.prices)

const { isLoading, error, fetchData: fetchPrices } = useFetchRequest(coinPriceStore.fetchPrices)

if (!coinPriceStore.prices) {
  fetchPrices()
}
// Ideally WebSocket should be used to update prices dynamically
// but as coingecko don't have them - price is updated on button click
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

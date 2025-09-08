<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Amount</th>
          <th scope="col">Result</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="record in history" :key="record.timestamp">
          <td>{{ record.from }} ({{ currencyMap[record.from] }})</td>
          <td>{{ record.to }} ({{ currencyMap[record.to] }})</td>
          <td>{{ record.amount }}</td>
          <td>{{ record.result }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">
import type { ExchangeRecord } from '@/types'
import { currencyMap } from '@/utils/currency'

const { history } = defineProps<{ history: ExchangeRecord[] }>()
</script>

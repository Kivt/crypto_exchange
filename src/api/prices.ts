import axios from 'axios'
import type { CoinId, CurrencyId } from '@/types'

const FETCH_PRICES = `${import.meta.env.VITE_API_URL}/simple/price?ids=%coins%&vs_currencies=%currencies%`

export default {
  fetchPrices: <T>(coins: CoinId[], currencies: CurrencyId[]) =>
    axios.get<T>(
      FETCH_PRICES.replace('%coins%', coins.join(',')).replace(
        '%currencies%',
        currencies.join(','),
      ),
    ),
}

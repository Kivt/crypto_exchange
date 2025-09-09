import type { CoinId } from '@/types'

export const currencyMap: Record<CoinId, string> = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  solana: 'SOL',
  tether: 'USDT',
}

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  })
    .format(price)
    .toString()

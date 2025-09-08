export const AVAILABLE_COINS = ['bitcoin', 'ethereum', 'solana', 'tether'] as const
export const AVAILABLE_CURRENCIES = ['usd'] as const

export type CoinId = (typeof AVAILABLE_COINS)[number]
export type CurrencyId = (typeof AVAILABLE_CURRENCIES)[number]

export type CoinPrice = {
  [coin in CoinId]: { [currency in CurrencyId]: number }
}

export type ExchangeRecord = {
  from: CoinId
  to: CoinId
  amount: number
  result: number
  timestamp: number
}

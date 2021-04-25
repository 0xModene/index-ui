import * as tokenAddresses from 'constants/ethContractAddresses'

export interface ProductToken {
  name: string
  symbol: string
  address: string | undefined
  image: string
  coinGeckoId: string
  tokensetId: string
}

export const DefiPulseIndex: ProductToken = {
  name: 'DeFi Pulse Index',
  symbol: 'DPI',
  address: tokenAddresses.dpiTokenAddress,
  image: 'https://index-dao.s3.amazonaws.com/defi_pulse_index_set.svg',
  coinGeckoId: 'defipulse-index',
  tokensetId: 'dpi',
}

export const CoinsharesCryptoGoldIndex: ProductToken = {
  name: 'Coinshares Crypto Gold Index',
  symbol: 'CGI',
  address: tokenAddresses.cgiTokenAddress,
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/coinshares_gold.png',
  coinGeckoId: 'coinshares-gold-and-cryptoassets-index-lite',
  tokensetId: 'cgi',
}

export const IndexToken: ProductToken = {
  name: 'Index Token',
  symbol: 'INDEX',
  address: tokenAddresses.indexTokenAddress,
  image: 'https://index-dao.s3.amazonaws.com/owl.png',
  coinGeckoId: 'index-cooperative',
  tokensetId: '',
}

export const Ethereum2xFlexibleLeverageIndex: ProductToken = {
  name: 'Ethereum 2x Flexible Leverage Index',
  symbol: 'ETH2x-FLI',
  address: tokenAddresses.fliTokenAddress,
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg',
  coinGeckoId: 'eth-2x-flexible-leverage-index',
  tokensetId: 'ethfli',
}

export const MetaverseIndex: ProductToken = {
  name: 'Metaverse Index',
  symbol: 'MVI',
  address: tokenAddresses.mviTokenAddress,
  image: 'https://set-core.s3.amazonaws.com/img/portfolios/mvi.svg',
  coinGeckoId: 'metaverse-index',
  tokensetId: 'mvi',
}

export const productTokensBySymbol = {
  'DPI': DefiPulseIndex,
  'MVI': MetaverseIndex,
  'CGI': CoinsharesCryptoGoldIndex,
  'ETH2x-FLI': Ethereum2xFlexibleLeverageIndex,
  'INDEX': IndexToken,
}

export default [
  DefiPulseIndex,
  MetaverseIndex,
  CoinsharesCryptoGoldIndex,
  Ethereum2xFlexibleLeverageIndex,
  IndexToken,
]

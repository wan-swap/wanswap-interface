import { Interface } from '@ethersproject/abi'
import { ChainId } from '@wanswap/sdk'
import BRIDGE_MINER_ABI from './bridge-miner.json'
import BRIDGE_TOKEN_ABI from './bridge-token.json'
import HIVE_ABI from './hive.json'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'

const WANV2_PAIR_INTERFACE = new Interface(IUniswapV2PairABI)
const BRIDGE_MINER_INTERFACE = new Interface(BRIDGE_MINER_ABI)
const WANV2BRIDGE_TOKEN_INTERFACE = new Interface(BRIDGE_TOKEN_ABI)
const HIVE_INTERFACE = new Interface(HIVE_ABI);

const BRIDGE_MINER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7E5fE1e587A5c38B4A4A9ba38a35096F8EA35aaC',
  [ChainId.ROPSTEN]: '0x01EcaA58733A9232Ae5F1D2f74c643f2f8b3Bb91',
  [ChainId.RINKEBY]: '0xAfa6C39FDf16446078aEeEE53E4c4843811570A1',
  [ChainId.GÖRLI]: '0xAfa6C39FDf16446078aEeEE53E4c4843811570A1',
  [ChainId.KOVAN]: '0xAfa6C39FDf16446078aEeEE53E4c4843811570A1'
}
const BRIDGE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8B9F9f4aA70B1B0d586BE8aDFb19c1Ac38e05E9a',
  [ChainId.ROPSTEN]: '0x830053DABd78b4ef0aB0FeC936f8a1135B68da6f',
  [ChainId.RINKEBY]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.GÖRLI]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.KOVAN]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D'
}
const HIVE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x93f98C2216B181846e1C92e7Deb06911373e1f37',
  [ChainId.ROPSTEN]: '0xcc1E39c4e2c3cd2DA61ad6511cf9Be69F410DF82',
  [ChainId.RINKEBY]: '0xA45b10Df50D6d0Bb4733Dd54E52fB4CefEc34E38',
  [ChainId.GÖRLI]: '0xA45b10Df50D6d0Bb4733Dd54E52fB4CefEc34E38',
  [ChainId.KOVAN]: '0xA45b10Df50D6d0Bb4733Dd54E52fB4CefEc34E38'
}

const ZOO_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x6e11655d6aB3781C6613db8CB1Bc3deE9a7e111F',
  [ChainId.ROPSTEN]: '0x890589dC8BD3F973dcAFcB02b6e1A133A76C8135',
  [ChainId.RINKEBY]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.GÖRLI]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.KOVAN]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D'
}

export {
  BRIDGE_MINER_ABI,
  BRIDGE_MINER_ADDRESS,
  BRIDGE_TOKEN_ABI,
  BRIDGE_TOKEN_ADDRESS,
  ZOO_TOKEN_ADDRESS,
  HIVE_ABI,
  HIVE_ADDRESS,
  HIVE_INTERFACE,
  WANV2_PAIR_INTERFACE,
  BRIDGE_MINER_INTERFACE,
  WANV2BRIDGE_TOKEN_INTERFACE,
}

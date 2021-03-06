import { makePromiseAction } from '../../utils/redux'

/**
 * @typedef {('metamask' | 'portis' | 'privateKey' | 'web3')} WalletType
 * @description The type of wallet being connected
 * @memberof wallet
 */

export const initMetamask = () => connectWallet('metamask')

export const initPortis = () => connectWallet('portis')

export const initEqual = () => connectWallet('equal')

export const initMobileWallet = () => connectWallet('web3')

export const initPrivateKeySigner = () => connectWallet('privateKey')

export const initLedger = () => connectWallet('ledger')

export const initTrezor = () => connectWallet('trezor')

export const clearWallet = () => ({
  type: 'CLEAR_WALLET',
})

export const connectWallet = walletType => ({
  type: 'CONNECT_WALLET',
  walletType,
})

export const getSigner = makePromiseAction({
  type: 'GET_SIGNER',
})

import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'

const RPC_URL = process.env.REACT_APP_RINKEBY_RPC_URL


const injected = injectedModule()


const initOnboard = init({
    wallets: [injected],
  chains: [
   // {
   // {
    //   id: '0x1',
    //   token: 'ETH',
    //   label: 'Ethereum Mainnet',
    //   rpcUrl: 'https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
    // },
    // {
    //   id: '0x3',
    //   token: 'tROP',
    //   label: 'Ethereum Ropsten Testnet',
    //   rpcUrl: 'https://ropsten.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
    // },
    {
        id: '0x4',
        token: 'rETH',
        label: 'Ethereum Rinkeby Testnet',
        rpcUrl: RPC_URL
      }
  ],
  appMetadata: {
    name: 'Odd Orcs',
    //icon: ApeIcon,
    description: ' A horde of Orc clans plaguing the mountains to drive their mission far and beyond the blockchain..',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ],
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    },
    gettingStartedGuide: 'https://blocknative.com',
    explore: 'https://blocknative.com'
  }
})


export { initOnboard }
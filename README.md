# proxy_implementation


## Usage

Getting the implementation address of USDC on mainnet:
```sh 
npx proxy_implementation -rpc ETH -proxy 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 -s 0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3
```

### Note
-s only needs to be specified for non standard storage locations i.e. locations other than 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc

### Using a custom RPC URL

If you wish to use a custom RPC url, pass in the url to the -rpc flag.

### RPC URLs
```md
Arbitrum_RPC = https://arb1.arbitrum.io/rpc
Avalanche_RPC = https://api.avax.network/ext/bc/C/rpc
BSC_RPC = https://bsc-dataseed.binance.org/
Celo_RPC = https://forno.celo.org
ETH_RPC = https://eth.llamarpc.com
Gnosis_RPC = https://rpc.gnosis.gateway.fm
Moonbeam_RPC = https://rpc.ankr.com/moonbeam
Optimism_RPC = https://rpc.ankr.com/optimism
Polygon_RPC = https://polygon-rpc.com
```
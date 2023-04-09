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
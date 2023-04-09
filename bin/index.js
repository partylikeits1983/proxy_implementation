#!/usr/bin/env node

const Web3 = require("web3");
const dotenv = require('dotenv');
const { Command } = require('commander');

const program = new Command();

dotenv.config();

async function getImpl(rpc_url, proxyContract, storagePosition) { 
    const web3client = new Web3(Web3.givenProvider || rpc_url);
    let addr = await web3client.eth.getStorageAt(proxyContract, storagePosition);
    let address = "0x" + addr.slice(-40);

    console.log("Implementation Address: %s", address);
}

program
  .version('0.1.0')
  .description('Get Implementation Address for Proxy Contract CLI tool')
  .requiredOption('-rpc, --rpc_url <rpc_url>', 'RPC URL')
  .requiredOption('-proxy, --proxy <proxy>', 'Proxy Address')
  .option('-s, --storage <storage>', 'Non Standard Storage Position')
  .action(({ rpc_url, proxy, storage }) => {

    let RPC_URL;

    switch (rpc_url) {
        case 'ETH':
            RPC_URL = process.env.ETH_RPC;
            break;
        
        case 'Arbitrum':
            RPC_URL = process.env.Arbitrum_RPC;
            break
        
        case 'Avalanche':
            RPC_URL = process.env.Avalanche_RPC;
            break
        
        case 'BSC':
            RPC_URL = process.env.BSC_RPC;
            break
        
        case 'Celo':
            RPC_URL = process.env.Celo_RPC;
            break
        
        case 'Gnosis':
            RPC_URL = process.env.Gnosis_RPC;
            break
        
        case 'Moonbeam':
            RPC_URL = process.env.Moonbeam_RPC;
            break
            
        case 'Optimism':
            RPC_URL = process.env.Optimism_RPC;
            break
        
        case 'Polygon':
            RPC_URL = process.env.Polygon_RPC;
            break
        
        default:
            RPC_URL = rpc_url;
            break
    }

    const storagePosition = (storage == undefined) ? "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc": storage;

    console.log("RPC link:", RPC_URL);
    console.log("Storage Position:", storagePosition);

    getImpl(RPC_URL, proxy, storagePosition);
  });

program.parse(process.argv);

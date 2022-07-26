# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
<------------------------------------------------------>

yarn command for installing needed dependencies

yarn add or npm install

yarn add --save-dev "@ethersproject/providers@^5.4.7" "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-ethers@^2.0.0" "@types/chai@^4.2.0" "@types/mocha@^9.1.0" "@typechain/ethers-v5@^10.1.0" "@typechain/hardhat@^6.1.2" "chai@^4.2.0" "ethers@^5.4.7" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.7.21" "ts-node@>=8.0.0" "typechain@^8.1.0" "typescript@>=4.5.0" "dotenv@^16.0.1" "@openzeppelin/contracts@^4.7.0" "@nomicfoundation/hardhat-toolbox@^1.0.2" "@nomiclabs/hardhat-etherscan@^3.0.0"


<------------------------------------------------------>

Warpspeed Setup Guide Video commands

npx hardhat run ./scripts/deployOnSKALE.js —network skale

npx hardhat verify <<contract address>>  —network skale 

<------------------------------------------------------>

#example for the .env file 



#URLS for Verify REPLACE <<CHAIN_NAME>> with appropriate chain name (ex. <<CHAIN_NAME>> replaced with whispering-turais)
   
API_URL=https://<<CHAIN_NAME>>.explorer.staging-v2.skalenodes.com/api
    example: https://whispering-turais.explorer.staging-v2.skalenodes.com/api
    
BLOCKEXPLORER_URL = https://<<CHAIN_NAME>>.explorer.staging-v2.skalenodes.com/
    example: https://whispering-turais.explorer.staging-v2.skalenodes.com/

ENDPOINT_URL_SKALE= https://staging-v2.skalenodes.com/v1/<<CHAIN_NAME>>
    example: https://staging-v2.skalenodes.com/v1/whispering-turais

<------------------------------------------------------>

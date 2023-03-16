require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");


dotenv.config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
 
  networks: {

    skale: {
            url: process.env.SKALE_ENDPOINT,
           
            accounts: [process.env.PRIVATE_KEY]
          },
      
  },
  etherscan: { 
    apiKey: {
      skale: process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "skale",
        chainId: parseInt(process.env.CHAIN_ID),
        urls: {
          apiURL: process.env.API_URL,
          browserURL: process.env.BLOCKEXPLORER_URL,
        }
      }
    ]
  }
};

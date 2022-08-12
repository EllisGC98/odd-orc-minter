require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");


// Set proxy
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent('http://192.168.0.50:3000');
setGlobalDispatcher(proxyAgent);
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.14",
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
    mainnet: {
      url: "",
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  }
};

require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();
const projectId = "_sj915W4EyiB9OvxRhuxQFKUd4s1tDlT"


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },

    mumbai: {
      // Alchemy Polygon Mumbai
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      // Alchemy Polygon Mainnet
      url: `https://polygon-mainnet.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    }

  },

  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};

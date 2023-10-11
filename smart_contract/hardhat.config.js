require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/P36wgz5-1MInoFFKKQYoxW5W9pFrdidz",
      accounts: [
        "598e9817d41beea5c9df0f9c31b3f2f67b279e4e3852a1a84f7da2c111f2f137",
      ],
    },
  },
};

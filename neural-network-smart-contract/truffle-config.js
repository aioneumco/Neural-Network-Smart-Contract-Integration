module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider("your mnemonic", `https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID`),
      network_id: 4,       // Rinkeby's network ID
      gas: 4500000,        // Gas limit
      gasPrice: 10000000000 // 10 Gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};

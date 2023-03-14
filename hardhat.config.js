require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      // Polygon funciona con MATIC y no ETHER
      url: process.env.MUMBAI_TESNET_URL,
      accounts: [process.env.PRIVATE_KEY],
      timeout: 0, // tiempo de espera para terminar el proceso
      gas: "auto", // limite de gas a gastar (gwei)
      gasPrice: "auto", // precio del gas a pagar (gwei)
    },
  },
  etherscan: { apiKey: process.env.API_KEY_POLYGONSCAN },
};

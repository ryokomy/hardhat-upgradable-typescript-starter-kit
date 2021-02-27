import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import { HardhatUserConfig } from "hardhat/config";
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

task("balances", "Prints the list of balances", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log((await account.getBalance()).toString());
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  // Your type-safe config goes here
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // accounts: { mnemonic: process.env.MNEMONIC as string },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      // accounts: { mnemonic: process.env.MNEMONIC as string },
    },
    // rinkeby: {
    //   url: process.env.RINKEBY_RPC_URL as string,
    //   accounts: { mnemonic: process.env.MNEMONIC as string },
    //   chainId: 4,
    //   gas: 4e6,
    //   gasPrice: 4e9 // 4 [GWei]
    // },
    // mainnet: {
    //   url: process.env.INFURA_MAIN_URL as string,
    //   accounts: { mnemonic: process.env.MNEMONIC as string },
    //   chainId: 1,
    //   gas: 4e6,
    //   gasPrice: 40e9 // 40 [GWei]
    // }
  },
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    },
  },
};

export default config;

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://cosmological-greatest-pond.ethereum-goerli.discover.quiknode.pro/mktp-6e57ba7ba3c43f57d824beeebabcbca772b2bd45/",
      accounts: ["b05f03e69922b7b3d1a7c94e81f2063d056c887eebf374982de732a157270b43"],
    },
  },
};

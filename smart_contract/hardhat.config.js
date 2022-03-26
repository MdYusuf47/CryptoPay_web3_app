require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Xe-4OdWrGgLBNb-0LP5LtC1PsoV2ocbo',
      accounts: ['a4048ca1d9b55081ec8c4a24e2b4588f3a46c9a5414d09ab3883615c6fb8db88']
    }
  }
};
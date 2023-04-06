require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Xe-4OdWrGgLBNb-0LP5LtC1PsoV2ocbo',
      accounts: ['put your wallet secret key']
    }
  }
};

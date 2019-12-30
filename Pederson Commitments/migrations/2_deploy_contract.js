var Pedersen = artifacts.require("./Pedersen.sol");

module.exports = function(deployer) {
  deployer.deploy(Pedersen);
};

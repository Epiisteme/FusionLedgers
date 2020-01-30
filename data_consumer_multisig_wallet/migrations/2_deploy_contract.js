var MultiSig = artifacts.require("./MultiSig.sol");

module.exports = (deployer,network,accounts)=> {
	//const uaddress[]=["0x254bA9c27cA75dd87A606b7A2ac37B6f9c73cd17"];
	//const n=1;
  deployer.deploy(MultiSig,1,['0x254bA9c27cA75dd87A606b7A2ac37B6f9c73cd17']);
};

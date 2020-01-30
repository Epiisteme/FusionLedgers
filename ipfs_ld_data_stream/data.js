var IPFS = require("ipfs");
var ipfs;

async function main() {

  ipfs = await IPFS.create({silent: true})
  
  const cid1 = await ipfs.dag.put({
        name : "Neha Agarwal",
        "proof": {
            "a": ["0x27a0f16b8021ad444de8f8112ce6f3bcf14a27a5c434db5ac6283ecadda178fb", "0x224e7386291a02afb0cf675fcee65fba38e0a8a8ed7825be39daedbf7b7c0184"],
            "b": [["0x0de7bbe83b7121ff66052efee4d5975c2e434505a9a7e98c0dde8864816bed13", "0x14e6d76ad2502372e19a42646aa7e64ce8989ce19643778303e0d3b92dbde620"], ["0x0a578d5494291c81f94a64b2cb3c14d2213cb29c12c5e29d479e8a1b508e7b30", "0x00bd1304682ed3c908f3cca311879e234f93c31f0856ed894cd0e2c322220f1a"]],
            "c": ["0x12b6b8b5a803be01ba5fbccc20273b6893d3bb9e0090475da469729b013d8a65", "0x13ff3d8105dd2caaaeb175ebef984273383c56dfb7ed00458b515e343398d5f6"]
        },
        "inputs": ["0x00000000000000000000000000000000c6481e22c5ff4164af680b8cfaa5e8ed", "0x000000000000000000000000000000003120eeff89c4f307c4a6faaae059ce10"]
     })
  const retrive= await ipfs.dag.get(cid1);
  data1=JSON.stringify(retrive.value)
  
  const files1 = await ipfs.add(data1)
  console.log(files1[0].hash)
}

main()



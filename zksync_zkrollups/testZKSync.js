import * as zksync from "zksync";
import {ethers} from "ethers";


const ethersProvider = new ethers.getDefaultProvider('rinkeby');
const syncWSProvider = await zksync.SyncProvider.getDefaultProvider("testnet")

const ethProxy = new zksync.ETHProxy(
    ethersProvider,
    syncProvider.contractAddress
);

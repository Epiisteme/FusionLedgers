pragma solidity >= 0.5.0 < 0.6.0;

import "./provableAPI.sol";

contract DataRetrival is usingProvable {
    string public info;

    event LogNewInfo(string information);
    event LogNewProvableQuery(string description);

    constructor() public
    {
        update(); 
    }

    function __callback(bytes32 myid, string memory result) public
    {
        require(msg.sender == provable_cbAddress());
        emit LogNewInfo(result);
        info=result;
    }

    function update() public payable
    {
        emit LogNewProvableQuery("Provable query was sent, standing by for the answer...");
        //provable_query("IPFS", "QmeVwg5jFEHxrnvw4WvtEuupTejETjfzMECL4UihdtvBr9");
        provable_query("IPFS", "QmTRDdiKtRyfAPUFjFBQTydxCWnQQ2LdRTGZQirmj8XWKo");
        


    }
}

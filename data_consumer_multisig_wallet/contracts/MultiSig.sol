pragma solidity ^0.5.1;

contract MultiSig{
    
    address[] public owners;
    uint public required;
    mapping (address => bool) public isOwner;
    mapping (uint => Transaction) public transactions;
    mapping (uint => mapping (address => bool)) public confirmations;
    uint public transactionCount;
    struct Transaction {
        address destination;
        uint value;
        bytes data;
        bool executed;
    }
    uint constant public MAX_OWNERS = 5;
    
    
    //MODIFIERS 
    modifier validRequirement (uint ownerCount, uint _required) {
        require(ownerCount <= MAX_OWNERS
            && _required <= ownerCount
            && _required != 0
            && ownerCount != 0);
        _;
    }
    
    modifier onlyWallet() {
        require(msg.sender == address(this));
        _;
    }
    
     modifier ownerDoesNotExist(address owner) {
        require(!isOwner[owner]);
        _;
    }
    
     modifier notNull(address _address) {
        require(_address != 0x0000000000000000000000000000000000000000);
        _;
    }
    
    modifier ownerExists(address owner) {
        require(isOwner[owner]);
        _;
    }
    
    modifier transactionExists(uint transactionId) {
        require(transactions[transactionId].destination != 0x0000000000000000000000000000000000000000);
        _;
    }
    
    modifier notConfirmed(uint transactionId, address owner) {
        require(!confirmations[transactionId][owner]);
        _;
    }
    

    modifier notExecuted(uint transactionId) {
        require(!transactions[transactionId].executed);
        _;
    }
    
    modifier confirmed(uint transactionId, address owner) {
        require(confirmations[transactionId][owner]);
        _;
    }



    //EVENTS
    event OwnerAddition(address indexed owner);
    event RequirementChange(uint required);
    event OwnerRemoval(address indexed owner);
    event Confirmation(address indexed sender, uint indexed transactionId);
    event Submission(uint indexed transactionId);
    event Execution(uint indexed transactionId);
    event ExecutionFailure(uint indexed transactionId);


    
    constructor (uint _required,address[] memory _owners) public validRequirement(_owners.length, _required){
        for (uint i=0; i<_owners.length; i++) {
            require(!isOwner[_owners[i]] && _owners[i] != 0x0000000000000000000000000000000000000000);
            isOwner[_owners[i]] = true;
        }
        owners = _owners;
        required = _required;
    }
    
    
    function addOwner(address owner) payable public ownerDoesNotExist(owner) notNull(owner) validRequirement(owners.length + 1, required)
    {
        isOwner[owner] = true;
        owners.push(owner);
        emit OwnerAddition(owner);
    }
    
     function removeOwner(address owner) public onlyWallet ownerExists(owner) {
        isOwner[owner] = false;
        for (uint i=0; i<owners.length - 1; i++)
            if (owners[i] == owner) {
                owners[i] = owners[owners.length - 1];
                break;
            }
        owners.length -= 1;
        if (required > owners.length)
            changeRequirement(owners.length);
        emit OwnerRemoval(owner);
    }
    
     function changeRequirement(uint _required) public onlyWallet validRequirement(owners.length, _required)
    {
        required = _required;
        emit RequirementChange(_required);
    }
    
    function replaceOwner(address owner, address newOwner) public onlyWallet ownerExists(owner) ownerDoesNotExist(newOwner){
        for (uint i=0; i<owners.length; i++)
            if (owners[i] == owner) {
                owners[i] = newOwner;
                break;
        }
        isOwner[owner] = false;
        isOwner[newOwner] = true;
        emit OwnerRemoval(owner);
        emit OwnerAddition(newOwner);
    }
    
    function submitTransaction(address destination, uint value, bytes memory data) public returns (uint transactionId)
    {
        transactionId = addTransaction(destination, value, data);
        confirmTransaction(transactionId);
    }
    
    function confirmTransaction(uint transactionId) public ownerExists(msg.sender) transactionExists(transactionId) notConfirmed(transactionId, msg.sender){
        confirmations[transactionId][msg.sender] = true;
        emit Confirmation(msg.sender, transactionId);
        executeTransaction(transactionId);
    }
    
    function executeTransaction(uint transactionId) public ownerExists(msg.sender) confirmed(transactionId, msg.sender) notExecuted(transactionId)
    {
        if (isConfirmed(transactionId)) {
            Transaction storage txn = transactions[transactionId];
            txn.executed = true;
            if (external_call(txn.destination, txn.value, txn.data.length, txn.data))
                emit Execution(transactionId);
            else {
               emit  ExecutionFailure(transactionId);
                txn.executed = false;
            }
        }
    }
    
    function addTransaction(address destination, uint value, bytes memory data) internal notNull(destination)returns (uint transactionId)
    {
        transactionId = transactionCount;
        transactions[transactionId] = Transaction({
            destination: destination,
            value: value,
            data: data,
            executed: false
        });
        transactionCount += 1;
        emit Submission(transactionId);
    }
    
    function isConfirmed(uint transactionId) public view returns (bool)
    {
        uint count = 0;
        for (uint i=0; i<owners.length; i++) {
            if (confirmations[transactionId][owners[i]])
                count += 1;
            if (count == required)
                return true;
        }
    }
   
   
    function external_call(address destination, uint value, uint dataLength, bytes memory data) internal returns (bool) {
        bool result;
        assembly {
            let x := mload(0x40)   // "Allocate" memory for output (0x40 is where "free memory" pointer is stored by convention)
            let d := add(data, 32) // First 32 bytes are the padded length of data, so exclude that
            result := call(
                sub(gas, 34710),   // 34710 is the value that solidity is currently emitting
                                   // It includes callGas (700) + callVeryLow (3, to pay for SUB) + callValueTransferGas (9000) +
                                   // callNewAccountGas (25000, in case the destination address does not exist and needs creating)
                destination,
                value,
                d,
                dataLength,        // Size of the input (in bytes) - this is what fixes the padding problem
                x,
                0                  // Output is ignored, therefore the output size is zero
            )
        }
        return result;
    }
    
    function getOwners() public  returns (address[] memory)
    {
        return owners;
    }
    
}
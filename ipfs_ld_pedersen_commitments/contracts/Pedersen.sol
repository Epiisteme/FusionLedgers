pragma solidity ^0.5.0;

contract Pedersen { 

    //uint public q =  21888242871839275222246405745257275088548364400416034343698204186575808495617;
    uint private q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;
    uint private gX = 19823850254741169819033785099293761935467223354323761392354670518001715552183;
    uint private gY = 15097907474011103550430959168661954736283086276546887690628027914974507414020;
    uint private hX = 3184834430741071145030522771540763108892281233703148152311693391954704539228;
    uint private hY = 1405615944858121891163559530323310827496899969303520166098610312148921359100;

    /*function Commit(string memory b1, uint r) public returns (uint cX, uint cY) {
        bytes memory b = bytes(b1);
        uint  cX1;
        uint  cX2;
        uint  cY1;
        uint  cY2;
        (cX1, cY1) = ecMul(b, gX, gY);
        (cX2, cY2) = ecMul(r, hX, hY);
        (cX, cY) = ecAdd(cX1, cY1, cX2, cY2);
    }*/


    function Commit(uint b, uint r) public returns (uint cX, uint cY) {
        uint  cX1;
        uint  cX2;
        uint  cY1;
        uint  cY2;
        (cX1, cY1) = ecMul(b, gX, gY);
        (cX2, cY2) = ecMul(r, hX, hY);
        (cX, cY) = ecAdd(cX1, cY1, cX2, cY2);
    }

    function Verify(uint b, uint r, uint cX, uint cY) public returns (bool) {
        uint cX2; 
        uint cY2;
        (cX2, cY2) = Commit(b,r);
        return cX == cX2 && cY == cY2;
    }

    /* function Verify(string memory b1, uint r, uint cX, uint cY) public returns (bool) {
        bytes memory b = bytes(b1);
        uint cX2; 
        uint cY2;
        (cX2, cY2) = Commit(b,r);
        return cX == cX2 && cY == cY2;
    }*/


    function CommitDelta(uint cX1, uint cY1, uint cX2, uint cY2) public returns (uint cX, uint cY) {
        (cX, cY) = ecAdd(cX1, cY1, cX2, q-cY2); 
    }


    function ecMul(uint b, uint cX1, uint cY1) private returns (uint cX2, uint cY2) {
        bool success = false;
        bytes memory input = new bytes(96);
        bytes memory output = new bytes(64);

        assembly {
            mstore(add(input, 32), cX1)
            mstore(add(input, 64), cY1)
            mstore(add(input, 96), b)
            success := call(gas(), 7, 0, add(input, 32), 96, add(output, 32), 64)
            cX2 := mload(add(output, 32))
            cY2 := mload(add(output, 64))
        }
        require(success);
    }


    function ecAdd(uint cX1, uint cY1, uint cX2, uint cY2) public returns (uint cX3, uint cY3) {
        bool success = false;
        bytes memory input = new bytes(128);
        bytes memory output = new bytes(64);
        
        assembly {
            mstore(add(input, 32), cX1)
            mstore(add(input, 64), cY1)
            mstore(add(input, 96), cX2)
            mstore(add(input, 128), cY2)
            success := call(gas(), 6, 0, add(input, 32), 128, add(output, 32), 64)
            cX3 := mload(add(output, 32))
            cY3 := mload(add(output, 64))
        }
        require(success);
    }

}
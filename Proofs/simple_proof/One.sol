pragma solidity ^0.4.20;

contract One{
	
   struct abc{
	   uint a;
	   uint b;
   }

   uint A;
   uint B;

   function set(abc abcd) public{
      A=abcd.a;
      B=abcd.b;
   }

   function get() returns(uint){
   return A;
   }


}
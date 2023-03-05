//SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract arr{
    uint[] dynamicarr = [1,2];

    function getdyarr() public view returns(uint[] memory){
        return dynamicarr;
    }

    function getlen() public view returns(uint){
        return dynamicarr.length;
    }

    function set(uint num) public {
        dynamicarr.push(num);
    }
 
    function del(uint num1) public{
        delete dynamicarr[num1]; //Always remember, when you delete an item from an array, the length remains the same in Solidity.
    }

    function remove(uint index) public{ //upar wale delete method ke problem ko solve karta h
    dynamicarr[index] = dynamicarr[dynamicarr.length - 1];
    dynamicarr.pop();
  }
}

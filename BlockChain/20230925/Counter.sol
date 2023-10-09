// SPDX-License-Identifier : MIT
pragma solidity ^0.8.13;

contract Counter{
    uint256 value;

    constructor(){}

    function setValue(uint256 _value) public{
        // 상태 변수 변경
        value = _value;
    }
    function getValue() public view returns(uint256){
        return value;
    }
}
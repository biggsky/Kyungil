// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Counter{
    uint256 value;

    constructor(){}

    function increment() public {
        value += 1;
    }

    function decrement() public {
        require(value != 0, "value 0 error");
        // 조건문 통과가 안되면 가스비 지불안하고 "value 0 error" 에러 내용
        value -= 1;
    }


    function getValue() public view returns(uint256){
        return value;
    }
    // 접근제한자 public
    // 접근지정자 view

    // npx truffle compile 컴파일 진행
}


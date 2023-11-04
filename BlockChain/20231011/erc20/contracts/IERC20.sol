// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20{
    function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns(uint);

    function transfer(address to, uint amount) external returns(bool);

    function allowance(address owner, address spender) external returns(uint);
    // uint 누가 얼마만큼 받았는지
    
    function approve(address spender, uint amount) external returns(bool);
    
    function transferFrom(address spender, address to, uint amount) external returns(bool);

    
}



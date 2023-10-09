// SPDX-License-Identifier : MIT


// extension 가서 solidity 설치 하자.
pragma solidity ^0.8.0;

contract Counter{
    uint256 value;

    constructor(){}

    // setter
    function setValue(uint256 _value) public{
        // value 상태가 변경된다.
        // 수수료가 발생한다. gas fee 발생
        value = _value;
    }

    // getter
    function getValue() public view returns(uint256){
        // view : 조회하기 위한 코드를 작성할때
        // returns(uint256) : 함수getValue의 반환 타입
        return value;
    }
    // 이것은 getValue 함수가 호출될 때 반환하는 값의 데이터 타입이 uint256라는 것을 의미합니다.

}




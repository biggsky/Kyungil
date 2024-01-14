// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IERC20.sol";

contract ERC20 is IERC20{
    // 토큰의 이름
    string public name;

    // 토큰의 단위 심볼(ETH)
    string public symbol;

    // 토큰의 소수점 자리 기본 18자리로 구성
    uint8 public decimals = 18;

    // 토큰의 현재 총 발행량
    uint public override totalSupply;

    address private owner;

    mapping(address => uint) public balances;
    /*  
        {
            "0x12414123 : 1000
        }
    */
    mapping(address=>mapping(address=>uint)) public override allowance;
    // {
    //     "0x12414123" : {
    //         "0x1241412123" : 500
    //     }
    // }

    /* 
        CA 주소로 이더가 전송이 되었을때 실행시키고 싶은 동작이 있어.
        익명함수
        receive 익명함수(특별한 함수)
        CA에 이더를 받으면 자동으로 실행되는 메서드
        이더가 CA에 전송 받았을때 동작을 추가할 수 있다.
     */
     receive() external payable{
        // 이더를 CA가 받았을때 실행되는 동작
        
        // 배포자가 토큰의 발행량을 관리를 하고
        // 다른 이용자들이 토큰을 가지고 싶으면
        // 컨트랙트 배포자가 정한 비율에 따라 토큰을 가져갈 수 있게

        // 소유권을 줄 토큰의 량
        // 받은 이더 비율로
        uint amount = msg.value * 200;

        require(balances[owner] >= amount);
        balances[owner] -= amount;
        balances[msg.sender] += amount;

        // 만약에 토큰 소유권을 모두 넘겨서 배포자가 들고있는 토큰이 없다면,
        // 만약에 배포자가 이더를 보냈으면 더 토큰을 발행할 수 있게
        if(msg.sender == owner){
            mint(amount);
        }
     }

    // 컨트랙트 생성자
    constructor(string memory _name, string memory _symbol, uint256 _amount){
        // 문자열은 가변적인 길이를 가질 수 있기 때문에
        // Solidity는 기본적으로 문자열을 storage에 저장할 수 없음.
        // 그래서 문자열을 다룰때는 메모리에 임시로 저장하고 사용함
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        mint(_amount * (10 ** uint256(decimals)));
    }

    function mint(uint amount) internal {
        balances[msg.sender] += amount;
        totalSupply += amount;
    }

    function balanceOf(address account) external view override returns(uint){
        return balances[account];
    }

    function transfer(address to, uint amount) external override returns (bool){
        balances[msg.sender] -= amount;
        balances[to] += amount;
        return true;
    }

    function approve(address spender, uint amount) external override returns (bool){
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transferFrom(address sender, address to, uint amount) external override returns(bool){
        require(allowance[sender][msg.sender] >= amount);
        // sender == A
        // msg.sender == B
        // to == C
        // {
        //     A : {
        //         B : 100
        //     }
        // }
        
        allowance[sender][msg.sender] -= amount;
        balances[sender] -= amount;
        balances[to] += amount;
        // {
        //     A : {
        //         B : 50
        //     }
        // }

        // {
        //     A : 950
        //     C : 50
        // }
    }
    function burn(uint amount) external {
        balances[msg.sender] -= amount;
        totalSupply -= amount;
    }
}


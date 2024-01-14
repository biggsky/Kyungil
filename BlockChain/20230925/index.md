# contract 실행
- 컨트랙트에 저장할 수 있는 영역 데이터를 영구적으로 저장할 수 있다.
- contract storage데이터를 저장한다.
- storage에 상태를 저장해서 유지시킬 수 있다(블록체인 스마트 컨트랙트)

- 우리가 배포한 스마트 컨트랙트의 저장공간이고 이 저장공간은 영구적이다.

# code 작성 js의 클래스 문법과 비슷하다.

```javascript
class Counter{
    value : number,
    constructor(){};

    setValue(){}
    getValue(){}

}

const _counter = new Counter()
{value : 1}
const _counter2 = new Counter()
{value : 1}

_counter.setValue(2)
// _counter,_counter 서로 다른 주소를 참조하고 있음
```

```
// SPDX-License-Identifier : MIT
// 라이센스 버전

// 솔리디티 버전
pragma solidity ^0.8.0;

// 컨트랙트 코드
contract Counter{
    uint256 value;

    constructor(){};

    function setValue(uint256 _value) public{
        value = _value;
    }

    function getValue() public view returns (uint256) {
        // 상태변수를 변경하지 않고 조회하기 위해 view를 쓴다.
        return value;
    }
}
```

- javascript의 클래스는 인스턴스를 생성을 하는 과정이(new 키워드를 사용해서 사용)
- new 키워드를 통해 생성된 인스턴스들은 다른 메모리 주소를 참조하고 있기에, 동일한 객체가 아니다.

- solidity에서의 컨트랙트는 컴파일된 코드의 내용이 EVM을 통해 실행되고 CA생성될때 solidity코드의 내용으로 인스턴스가 한번 생성된다.
<!-- ???? -->

- 이후에 생성된 인스턴스를 CA로 참조해서 컨트랙트에 접근해서 사용하는 데이터는 같은 데이터를 참조하게 된다.(싱글톤 패턴의 방식)

- 싱글톤 패턴의 방식 : 인스턴스 객체를 하나 생성해서, 어디서든 생성한 인스턴스만 참조하는 디자인 패턴

- 스마트 컨트랙트 프로세스
1. 컨트랙트 코드를 작성
2. 컨트랙트 코드 컴파일
3. 스마트 컨트랙트 배포(트랜잭션 생성)
4. node에게 전송(트랜잭션 발생)
5. 블록이 생성(트랜잭션 처리)
6. Account(CA) 생성됨
7. EVM에서 솔리디티 코드를 실행해서 인스턴스 생성
8. storage에 데이터 저장


# 스마트 컨트랙트 코드 구현
- 간단한 카운터를 만들자.

- 스마트 컨트랙트의 코드가 실행될때 EVM에서 연산을 얼마나 할지와 네트워크의 환경의 기준으로 수수료 가스가 측정된다.
- 네트워크 상황과 코드의 복잡성에 따라서 연산(이걸 우리가 직접 연산을 하기는 어렵고 가스비 추정은 가능하다.)
- 상태 변수의 값을 조회하는 함수는 연산을 하는 과정이 없기때문에 가스비를 필요로 하지 않는다.
- 상태변수의 값을 변경하는 경우 연산이 포함되어 (한정된 네트워크 자원 사용) 연산에 따른 가스비를 지불해야한다.
- 연산을 하는 과정에서 코드의 무한루프를 연산하게 되면 과도한 가스비 발생을 방지하기 위해, gasLimit가 초과되면 트랜잭션이 블록에 담기지 않는다.


# 개발 환경 구축

```sh
# solc 설치
npm i solc@0.8.13

# ganache-cli 설치
npm i ganache-cli



```




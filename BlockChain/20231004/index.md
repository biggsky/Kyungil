# 솔리디티
1. 절차적 프로그래밍 언어
2. 컴파일 언어


# SPDX License Identifier
- 스마트 컨트랙트 신뢰성
- 저작권 문제를 방지하기 위해 코드 최상단에 주석으로 표시, 작성함


# Pragma
- 컴파일러의 기능을 사용하기 위해 작성하는 구문
- 솔리디티 버전 작성 명시


# Contract
- 객체 지향 언어의 class와 유사
- contract의 내부에 상태 변수를 보관
- 상태변수를 조회 또는 변경을 하기 위한 함수도 포함을 하고 있음.


# 솔리디티 코드를 작성할 때 

## import
- 외부 파일의 코드를 가져올 수 있음(모듈화)
- export 할 필요 없음. 선언한 Contract를 바로 사용 가능

```javascript
import "파일 경로";
import {"Contract이름"} from "파일 경로";

```


# 상태 변수
- Contract 내부에 선언한 변수
- Contract storage에 저장

1. Storage : 블록체인에 기록되는 영구적인 값이 유지되는 공간
2. Memory : 프로그램이 동작하는 동안에만 값을 기억, 동작하고 종료되면 해제시키는 데이터 공간(function 등)


# 데이터의 타입
```javascript
contract Counter{
    // 상태변수 선언
    // [타입] [변수명]
    bool _bool;
    // 기본 true
    // 참과 거짓의 값을 저장하는 변수

    uint256 _uint;
    // uint 부호가 없는 정수형, -(마이너스)가 안붙는 정수. 음수가 될 수 없음.
    // 정수형 타입 uint는 uint 자료형 뒤에 숫자를 붙이면 메모리 영역의 크기를 지정할수 있음.

    int256 _int;
    // 부호가 있는 정수형 -(마이너스)가 붙을수 있음. 음수가 될 수 있음.
    // 정수형 타입 int는 int자료형 뒤에 숫자를 붙이면 메모리 영역의 크기를 지정할 수 있음.

    // int, uint의 데이터 범위를 지정할 수 있는 이유는 작업을 할때 어떤 코드를 작성하느냐에 따라 효율적으로 데이터 공간을 줄이기 위해서임.
    // 8 ~ 256 bit 까지 지원을 하고 

    /*  
    예)
    int8 === -128 ~ 127
    uint8 === 0 ~ 255

    enum
    개발자가 가독성 높이기 위해서 사용하는 자료형
    상수를 사용하면서 가독성을 높이기 위해서 사용
    */
    enum Status{
        Pending, // 0
        Accepted,// 1
        Rejected,// 2
    }

    // status 초기값은 0
    Status public status;
    // status.Pending === 0
    // status.Accepted === 1
    // status.Rejected === 2

    // enum의 상태를 조회
    function get() public view returns (Status){
        return status
    }

    // enum의 상태를 변경
    function set(Status _status) public {
        status = _status;
    }

    // string 문자열 자료형
    string Str = "hello sol";

    // address 주소형
    // 우리가 지갑을 만들때 봤던 주소
    // 주소의 크기는 20바이트 크기의 자료형 컨트랙트 주소를 저장할때 사용하는 변수
    address sender = 0x0000000000000000000000000000000000000000;
    
    // sender.balance === 해당 주소의 이더 잔액을 조회 할 수 있음.
    // sender.transfer("보낼 금액");
    // sender.send("보낼 금액");
    // balance property가 있어서 주소의 이더 잔액을 확인 가능하다.
    // 메서드 transfer, send 메서드를 사용해서
    // 이더 전송 가능

    // 배열의 타입
    // 배열의 크기가 실행중에 변경 가능
    string[] strArr = ["1", "2", "3"];
    
    // 배열의 크기 지정
    // 배열의 크기가 선언시 지정이 된다.
    string[2] strArr2 = ["1","2"];


    // 구조체 struct
    struct Struct{
        string name;
        uint number;
    }
    // 구조를 정의

    // 매핑 (key-value 키와 값을 저장할때 사용하는 데이터 타입)
    mapping (address => uint256) tokens;
    // address를 string으로 바꿔도 됨 (문자열타입을 원할시)
    tokens {
        address : 10000
    }
    // address 가 key
    // uint256 가 value

    mapping (address =>mapping(address=>uint256)) token2;
    // string이 key
    
    // address 가 key
    // uint256 value
    tokens2 {
        string : {
            address : 10000
            address2 : 10000
        }
        string2 : {
            address : 10000
            address2 : 10000
        }
    }

    // 글로벌 변수
    function a(address payable _to) public payable {
        // address payable 선언식
        // 매개변수 이름 _to

        // payable : 이더리움을 송금하거나 결제를 진행할 것인지에 대한 처리.
        // 이더리움을 보내거나 받겠다는 뜻

        // 이더리움 블록체인 정보
        // block
        block.coinbase; // 현재 블록을 채굴한 account주소
        block.difficulty; // 현재 블록의 난이도
        block.gaslimit; // 현재 블록이 사용 가능한 최대 gas 값
        // 블록에 트랜잭션 거래들을 넣기 위해서는 gas비가 들기에, 무한정으로 트랜잭션 거래를 넣을 순 없어서 최대 gas 값을 설정해줌.
        block.number; // 블록의 높이
        block.timestamp; // 블록 생성 시간

        // msg 컨트랙트에서 message call 했을때, 컨트랙트에 전달된 메시지 정보를 가지고 있는 객체
        msg.sender; // 컨트랙트를 호출한 account의 주소
        msg.value; // 메시지로 전달받은 이더리움의 단위가 wei단위로 담겨있음.
        msg.data; // 컨트랙트 call로 실행할때 보낸 데이터의 내용
        msg.sig;  // 전달받은 데이터의 첫 4바이트 === 어떤 메소드를 실행시켰는지 확인이 가능

        // address
        _to.balance; // 계정의 잔고
        uint amount = 10**18;
        _to.transfer(amount); // 이더를 해당 주소에 보냄
        _to.send(amount);  // 이더를 해당 주소에 보냄
    }

    // 함수의 구조
    function name(uint a) public view returns (uint){

    }

    /*  
    name : 함수명
    uint a : 타입 매개변수 이름
    public : 함수의 접근자

    접근자의 타입
    1. public : 외부에서 호출이 가능. 외부 컨트랙트나 계정에서 호출 가능. EOA나 CA에서 호출이 가능하다는 얘기
    2. private : 현재 컨트랙트에서만 호출이 가능

    예)
    function setValue(uint256 _value) private{
        value = _value;
    }
    private 되어있으면 컨트랙트 내부에서만 사용이 가능

    3. interval : 
    - 내부 함수는 컨트랙트에서 접근을 할 수 있고. 
    - 외부x. 
    - 다른 컨트랙트에서 상속을 받아서 호출이 가능함.
    4. External
    - public 같은 타입

    접근 지정자
    view 부분 : 상태변수 변경 선언. 솔리디티 언어의 특징
    view : 상태변수 읽기전용. 변경은 불가능.
    pure : 상태변수 읽기도 안되고, 변경도 안됌. => 말그대로 순수하게 전달받은 매개변수로만 함수의 동작을 하고싶은 경우에 사용
    payable : 결제를 처리할 수 있다는 선언, 이더를 전송하는데 선언을 하지 않으면 거부된다.(reject)

    조건문 작성
    require : 
    주어진 조건을 검사해서 만족이 되면 구문 통과, 
    만족이 안되면 reject 발생, 이전 상태로 되돌림
    - gas 반환 O
    - if문 같이 조건처리를 할 때 사용
    */
   require(조건문);
   조건문이 잘 통과되면 동작해야할 구문

    // 컨트랙트 배포자가 계약 파기 하고 싶을때

    // sender 배포자의 주소를 받을 변수 이더를 전송 받을 수 있다. payable가 있기 때문이다.
    address payable sender;

    require(msg.sender == sender);

    // selfdestruct
    selfdestruct(sender);
    // selfdestruct(지갑 주소) : 현재 계약을 파기하고, 전달받은 매개변수 주소로 CA의 잔액을 전송한다.
    // selfdestruct(CA 주소) : 계약을 파기하고 전달된 CA에 잔액을 전송할 수 있다.
}
```


# Truffle
- Dapps 개발을 쉽게 개발할 수 있도록 도와주는 프레임 워크
- 스마트 컨트랙트 컴파일, 배포 및 테스트 기능을 쉽게 할 수 있도록 도와준다.

- 리액트 설치

```sh
npx create-react-app test
cd test
npm i truffle
npx truffle init
```

- npx truffle init을 하면 초기 세팅을 도와준다. 3개의 폴더가 생김

1. contracts : 
- 솔리디티 코드를 작성한 sol 파일들을 담을 폴더
- 컴파일을 진행하면 이 폴더에 있는 sol파일을 읽어서 컴파일을 진행한다.
- build폴더가 생기고 컴파일된 내용이 json파일로 생성된다.

2. migrations :
- 컨트랙트 배포를 진행할 js 코드 작성.
- 이더리움 네트워크에 배포하는 내용을 담은 javaScript 파일이 이 폴더에 포함됨

3. test : 
- 테스트 파일을 작성할 폴더

- truffle-config.js 파일 수정
- 환경 세팅

```json
module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
  },

  compilers: {
    solc: {
      version: "0.8.13",
    }
  },
};
```


# 컴파일
- 솔리디티 코드 작성하자. contracts 폴더에 sol파일을 만들자.

- 컴파일 명령어
```sh
npx truffle compile
```

npx truffle compile 실행하면
- build 폴더가 생기고 컴파일된 내용이 생성된 json파일에 작성되어 있다.


# 배포
- ganache-cli

```sh
npm i ganache-cli
npx ganache-cli
```

- migrations 폴더 안에 배포 코드 작성
- 파일명의 규칙이 있다.
- 파일명 : [번호]_[내용]_[컨트랙트 이름].js 파일로 이름 작성
- 1_deploy_Counter.js 이렇게 이름 작성

- 배포 명령어
```sh
npx truffle migrate
```

- 배포한 CA 확인
- 0xEa7a3055644FCA2B843f4d6cfb1C973fD0358B4f

- CA로 요청을 보내서 call send 통해 원격 프로시저 실행을 할 수 있는데,

- truffle 콘솔에서 확인해보고 싶은데

```sh
npx truffle console
```

- 콘솔창에 코드를 작성해서 call send를 테스트해 볼 수 있다.
```javascript
    // Counter라는 컨트랙트가 배포된것에서 마지막으로 배포된 컨트랙트를 접근
    // 접근하는 동안 비동기 처리
    // instance === 배포한 Counter 컨트랙트에 접근해서 인스턴스를 매개변수로 받음
    // counter 변수를 선언하고 instance를 담아준다.
    Counter.deployed().then((instance)=>(counter = instance));
    // counter 배포된 컨트랙트의 인스턴스가 담겨있고 call과 send가 메서드로 포함되어 있다.

    counter.getValue();
    // call 요청을 보내자.
    // BN 객체는 매우 큰 숫자를 명시. 매우 큰 숫자를 다룰때 사용된다.
    // 특히 블록체인같은 분산 원장 기술에서 자주 사용.

    // words: [ 0, <1 empty item> ]
    // 아이템 하나 있고 값은 0이다.

    counter.setValue(20);
    // send 요청을 보내자.
    // send 가스비 발생
    // words: [ 20, <1 empty item> ] 값이 수정되어서 20으로 변경됨.
```

# 테스트 코드 작성
```sh
# 테스트 코드 실행
npx truffle test
```

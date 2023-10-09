# 이더리움 개발


## 이더리움으로 개발하기 위해 필요한 개념
- block : 트랜잭션 및 데이터를 모아서 하나의 블록에 저장한다.

- Account : EOA와 CA의 두 개념이 있고,
- EOA 토이 비트코인에서 만들었던 개인키가 존재하는 어카운트,
- CA 컨트랙트 코드에 의해 제어되는 스마트 컨트랙트 어카운트
- 두계정 모두 잔액을 가지고 있다.(EOA, CA)

- Message or transaction : 트랜잭션은 메시지의 수신자가 이더를 보낼때

- ETH : 이더리움 네트워크에서 사용하는 암호화폐의 기본 단위


# 이더리움 개발을 할때 사용하는 툴
1. geth
- go언어로 작성이 되어있는 이더리움 클라이언트.
- chainid를 확인 할 수 있는 클라이언트
- chainid는 블록체인의 고유 식별자 메인넷인지 테스트넷인지 구분을 할 수 있다.

2. Ganache
- 로컬 개발 및 테스트환경을 제공해준다. (이더리움 네트워크)

3. 파운드리
- 솔리디티 테스트 코드를 작성할 수 있다.
- TDD 구현 가능

4. 메타마스크
- 브라우저의 확장 프로그램으로 웹 어플리케이션에서 이더리움 스마트 컨트랙트와 상호 작용할 수 있도록 도와준다.
- 개인키의 관리, 트랜잭션을 생성하면 서명을 네트워크에 전달할 수 있다.

5. Truffle, Hardhat
- 스마트 컨트랙트 개발, 테스트 배포를 쉽게 할 수 있도록 도와주는 프레임 워크


# Ganache : 로컬 개발 테스트(이더리움 네트워크)

## RPC(Remote Procedure call)
- 별도의 원격 제어를 위한 코딩을 하지 않고 다른 주소공간에 프로시저를 실행할 수 있게 하는 프로세스 간의 통신

함수
- 입력에 따른 출력이, 발생을 목적으로 한다.
- 클라이언트에서 처리를 하고 연산작업이나 수치가 필요할경우 사용.

프로시저
- 출력값에 집중하기보다 `명령의 단위가 수행하는 절차`
- 반환값이 있을수도 있고 없을수도 있음.
- 서버단에서 처리.

## RPC 통신을 언제 사용하냐?
- 일반적으로 우리가 코드를 작성하고 프로그램을 실행시키면 자신의 메모리공간에서 기능을 하고 함수의 실행이 됨

- 다른 주소에 있는 함수를 실행시키고 싶은데?
- RPC 자신과 다른 주소의 메모리 공간의 동작하는 프로세스의 함수를 실행할 수 있게 해준다.

RPC 통신을 사용하면 장점
- 비즈니스 로직을 개발하는데 집중을 할 수 있다.


ganache 설치를 하자.
- npm i -g ganache
- 실행명령어 npx ganache-cli

RPC를 이용해서 함수 호출
```json
{
    "jsonrpc" : "2.0", // json-RPC 버전 2.0
    "method" : "web3_clientVersion", // 실행 요청할 메서드명
    "params" : [] // 메서드에 전달을 할 인자값 매개변수
}
```


curl 
- cli에서 요청을 보낼 수 있다.


1. -X POST : get인지 post인지 등등 요청 타입
2. -d `{"jsonrpc" : "2.0", "method" : "web3_clientVersion", "params" : []}` : 전달하는 데이터의 내용
3. 마지막은 요청하는 URL 주소

curl -X POST -d '{"jsonrpc" : "2.0", "method" : "web3_clientVersion", "params" : []}' http://127.0.0.1:8545


- ganache로 이더리움 네트워크 테스트환경에서
- web3_clientVersion 메서드를 실행시키는데
- RPC 통신으로 요청을 보내서
- 네트워크의 web3_clientVersion 메서드를 실행시키고
- 반환받은 메시지는 {"jsonrpc":"2.0","result":"EthereumJS TestRPC/v2.13.2/ethereum-js"}
- EthereumJS TestRPC/v2.13.2/ethereum-js


eth.getBalance(매개변수)
- curl -X POST -d '{"jsonrpc" : "2.0", "method" : "eth_getBalance","params" : ["0xc13Bc91C215e66D6671CdABA15AdDc551d45bDd5"]}' http://127.0.0.1:8545


- eth_getBalance함수를 RPC 통신으로 요청을 해서
- 계정의 잔액
- {"jsonrpc":"2.0", "result" : "ox109832312"}


- web3에서는 getBalance 호출을 하면 10진수로 변환해서 반환 값을 주고
- wei
- wei -> eth
- leth === 100 x 10e18 wei
- wei = 10 ** 18


# 이더리움 트랜잭션을 발생 시킬때 gas
- 주유소를 예를 들어서
- 리터당 2000

4만원 넣는다고 가정하면 20리터

- 리터가 gasPrice : 리터당의 가격 2000
- gas : 가스의 리터당으로 계산 값이 총 가스량에서 우리가 발생시킬 수 있는 총 제한량

- 트랜잭션 발생시 총 수수료는 gas X gasPrice

- byte당 대략 5gas


# sendTransaction
curl -X POST -d '{"jsonrpc" : "2.0", "method" : "eth_sendTransaction","params" : [{"from" : "0xc13Bc91C215e66D6671CdABA15AdDc551d45bDd5","to"   : "0x1eC59c4769F08Fa78E08f3786E8494a676D46004","value" : "10"}]}' http://127.0.0.1:8545

<!-- 전송했으니까 밸런스 확인 해보자 -->


# web3
- js 라이브러리로, 웹 어플리케이션에서 이더리움 블록체인과 상호작용을 하기 위해 노드에서 요청을 보낼때 API를 지정해놓았다.


# 간단하게 컨트랙트 배포
- 소스 코드 작성에 사용하는 언어 : 솔리디티를 사용할것이고,
- 컴파일 -> EVM이 실행시킬 수 있는 형식(바이트 코드로) 변환

- 배포 -> 트랜잭션 생성 변환한 바이트 코드와 내용을 포함한 트랜잭션을 생성하고 이더리움 네트워크에 전송
- 네트워크에 트랜잭션 풀에 담기고 블록 생성되면서 데이터로 저장이 된다. -> 스마트 컨트랙트 배포


# 기본적인 솔리디티 코드 구조
1. 라이센스 식별자
2. 솔리디티 버전
3. 배포할 컨트랙트


# 솔리디티 코드 컴파일
// solc 라이브러리 설치
- npm i solc

// solc를 사용해서 코드 컴파일
- npx solc --bin --abi ./test.sol

SPDX-License-Identifier 이부분 2개 있으면 안됨(주석처리 되어있다해도)

<!-- SPDX-License-Identifier: MIT은 소스 코드 파일의 맨 위에 주로 작성되는 주석입니다. 이 주석은 소프트웨어의 라이선스를 명시하는 역할을 합니다. -->

실행명령어
npx solc --bin --abi ./test.sol
- test_sol_Counter.abi 와 test_col_Counter.bin 파일 생성 해줌

web3 공식문서 사이트
https://web3js.readthedocs.io/en/v1.10.0/#



# 컨트랙트 복습

```sh
리액트 폴더 생성
npx create-react-app test

cd test

라이브러리 설치
npm i truffle
npm i web3
npm i ganache-cli

# npm i truffle web3 ganache-cli

설치한후
# npx truffle init 하자
```

- contracts 폴더에 sol파일에 컨트랙트 코드 작성하고

- 컴파일 진행 후

- migrations 폴더에
- 배포 내용 코드 파일 추가
- 파일명 = [번호]_[내용]_파일명.js

- 1_deploy_Counter.js

- truffle config 파일 내용에 지정한 네트워크로 배포 진행

```sh
npx truffle migrate
```


- CA를 잊어버렸다면 truffle console 활성화시키자

```sh
npx truffle console
# 배포한 컨트랙트의 이름
# CA 조회

Counter.address
# 배포한 컨트랙트 Counter마지막으로 배포한 CA가 나온다.

```

Counter.json
//   build/contracts 안에 있는 abi 배열 가져옴

# 계약을 작성

# 숫자야구 게임을 하나 만들어볼 건데..


게임을 재시작하는 내용을 추가
어드민 부분 한번 수정

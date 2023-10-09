/* npm init
package.json 파일을 만들어준다.
파일을 만들때 속성들을 입력하라고 함.

메타데이터는 데이터들을 설명해주는 데이터(속성)
예) 책이 한권 있다고 가정하면 제목, 저자, 출판사도 있고 등등의 책의 정보

우리의 프로젝트의 정보를 가지고 있는 json 파일이다.
메타데이터 설명을 가지고 있는 json 파일 초기화 명령어
npm init
패키지 이름 뭐야 등등~ 질문을 해요

// 모든 설정에 기본값으로 설정 하는 명령어
npm init -y



{
  "name": "0501",
  -패키지의 이름
  "version": "1.0.0",
  -패키지의 버전
  "description": "",
  -패키지의 설명 이거 무슨무슨 작업을 진행한 프로젝트다.
  "main": "index.js",
  -모듈화를 시킬때 메인 파일
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  -우리가 실행시킬때 스크립트의 명령어
  "keywords": [],
  -검색 키워드 배열의 형태로 넣어주면 된다.
  "author": "",
  -제작자. 패키지의 저자
  "license": "ISC"
  -"ISC" 패키지의 라이선스
}

name : 프로젝트의 이름
version : 프로젝트의 버전을 정의
description : 프로젝트의 설명, 문자열로 작성하면됨.
keywords : 프로젝트를 검색할때 참조하는 키워드들을 배열로 전달해주면된다.
author : 패키지 만든사람 작업자 정보
license : 패키지 라이선스
main : 이 값을 작성해주면 패키지를 require 함수로 불러올때 이 파일을 불러올 수 있다.

scripts
우리가 자주 실행할거 같은 명령어를 작성해두고
npm 명령어로 실행할 수 있다. ex) npm run test
"scripts" : {start : "node index4.js"} === npm start == node index4.js

*/




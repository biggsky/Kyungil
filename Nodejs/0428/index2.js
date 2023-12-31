/*
mysql 설치를 미리 하자
workbench 편하게 gui로 조작해서 추가가 가능하다.

cli좀 작성을 해보고 넘어갑시다.

mysql 접속을 해보자
mysql -u root -p 이렇게 쓰면 비밀번호 입력하고 접속하라고 뜸
환경변수가 등록이 안되어있으면
c드라이브 - 프로그램 파일 - mysql - mysql server - bin
이 경로까지 가야하는 이유는 exe 파일이 이 경로에 있기 때문

환경변수 설정을 해보자
돋보기 누르고 - sysdm.cpl(시스템 속성) - 고급탭 - 환경변수클릭 - 시스템변수쪽에 path 찾아서 편집 - 새로 만들기 클릭해서 - C:\Program Files\MySQL\MySQL Server 8.0\bin 경로 입력해주기

어디서든mysql에 접속 할 수 있다.

쿼리문은 데이터베이스에 추가 수정 삭제를 할 수 있는 명령어
쿼리문은 데이터베이스에서 원하는 데이터를 가져오기 위해서 사용하는 명령어.

현재 있는 데이터 베이스들을 확인하는 쿼리문
---------------------------
show databases;
---------------------------

데이터 베이스를 추가 해주는 쿼리문
---------------------------
CREATE DATABASE (데이터베이스 이름) CHARACTER SET utf8;
---------------------------

사용할 데이터 베이스 선택하는 쿼리문
---------------------------
use (데이터 베이스의 이름);
---------------------------

// 테이블이라는 곳에 저장을 합니다. 
유저의 테이블도 있을것이고, 게시판에 대한 테이블이 있을것이다.
이거는 유저의 내용만 담을 객체야.
*/

// 테이블 추가
// ---------------------------
// CREATE TABLE (데이터베이스 이름).(테이블의 이름)(
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     content VARCHAR(255) NOT NULL
// )
// ---------------------------

CREATE TABLE test5.aa(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(255) NOT NULL
)

// 테이블의 리스트 확인
// ---------------------
// show tables
// ---------------------


// 테이블 확인 쿼리문 
// ---------------------
// SELECT * FROM aa
// ---------------------


// 테이블에 내용을 추가해보자.
// INSERT INTO (데이터베이스 이름).(테이블 이름) ('ID', 'content') VALUES ('1', '안뇽');

INSERT INTO test5.aa (`id`,`content`) VALUES ('1', '안뇽');




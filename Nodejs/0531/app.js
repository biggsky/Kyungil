/* 
웹 서비스를 개발을 하고 완료되면 배포를 해서 사용자에게 소프트웨어를 전달 해야하는데
배포를 하기 위해 필요한게 제3자가 접속할 수 있는 서버 컴퓨터가 필요하다.
365일 내내 24시간 켜져있어야 하는데

서버 컴퓨터를 대여해주는 호스팅 업체를 통해 배포를 진행한다.
호스팅에는 두가지로 나뉘는데 (서버 호스팅)(웹 호스팅)
서버 호스팅 : 물리 서버를 단독으로 임대 및 구매
웹 호스팅 : 서버의 일부 공간을 임대하는 개념( 컴퓨터를 잘게 쪼갠 거라고 보면됨.)

- 웹 호스팅의 장점 : 서버나 인프라 구축이 필요 없고 비용이 저렴하다는 장점
- 웹 호스팅의 단점 : 웹 호스팅은 자원이 한정적. 단독 서버에 비해 사용량이 제한적.

웹 호스팅 업체중 하나인 AWS 통해서 서버를 배포 할 것.

laaS : 컴퓨터 자원만 제공하는 형태 (AWS) Infrastructure as a Service
Paas : 헤로쿠, 네트리파이 등등 기존 환경에서 서비스를 올려주는 형태

인스턴스 만들기 전에 오른쪽 상단에 region 확인 서버컴퓨터가 가깝게 

인스턴스의 사용 운영 체제 선택

우리가 사용할 os는 우분투 프리티어

키페어 잘 보관 해놓자 혹시나 전달해야할 경우 저장매체 사용 USB등

ssh TCP 프로토콜 포트 범위 22 기본으로 가지고 있는 디폴트 포트라고 생각하면 된다.
인스턴스에 접근을 하기 위해서

보안 그룹 설정 HTTP, HTTPS, MYSQL

인스턴스에 mysql 설치

mysql 설치 명령어

업데이트
sudo apt-get update
sudo apt-get install mysql-server

설치 다되면 해보기
sudo mysql -u root -p

데이터베이스 세팅
우리가 사용할 데이터베이스 하나 만들어보자
쿼리문 그대로 사용해서 만들자
create database 이름;

데이터베이스 확인
show databases;

데이터베이스를 사용할때 우리가 사용할 유저를 만들어주자
사용할 유저 생성
create user '여기에 유저 이름'@'%' identified by '여기에 사용할 비밀번호';
예) create user 'admin'@'%' identified by '0531';

만든 유저에게 권한 설정
grant all on 데이터 베이스 이름.(데이터베이스 이름 뒤에 점)* to '유저 이름'@'%';
예) grant all on test.* to 'admin'@'%';

권한이 주어졌는지 확인
show grants for '여기 유저 이름';
예) show grants for 'admin';

접속하기
mysql -u admin -p

나가기
exit

mysql로 들어가기
sudo service mysql restart;



보안그룹에 mysql을 허용 해놓음 이미
mysql 외부 접근 허용
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;

파일을 열고 i 눌러서 수정모드 진입
bind-address 다 지우고 0.0.0.0
esc 눌러서 풀고
:wq! : 저장후 종료
:q! : 종료
:w! : 강제 저장

퍼블릭 IPv4 DNS 쪽 코드 복사하기

프로젝트를 설치 받자
git에 올린 프로젝트를 설치

nodejs 설치

sudo apt-get update
sudo apt-get install -y build-essential
sudo apt-get install curl
원하는 노드 버전을 적어주면 된다.
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash --

nodejs 설치합니다.
sudo apt-get install -y nodejs

node 버전 확인 node -v
npm 버전 확인 npm -v

vi로 파일 확인
예) vi package.json

:q!로 종료

포트 포워딩을 해서 80 http로 접속했을때 8080포트로 재 매핑 시켜주자
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;
--dport 80 접속 했을때 --to-port 8080 이 포트로 재매핑

포트 포워딩 확인 명령어
sudo iptables -t nat -L --line-numbers

포트 포워딩 삭제 명령어
sudo iptables -t nat -D PREROUTING 인덱스 번호

http://ec2-3-39-22-17.ap-northeast-2.compute.amazonaws.com/login

http : 80번 포트
https : 443 포트

그리고 서버대기가 종료되는데
백그라운드에서 서버를 대기시켜서 계속 동작하게
pm2 설치
npm i pm2
package.json 부분에서 실행 스크립트 명령어를 node app.js로 실행했을텐데
pm2 start app.js로 수정하면된다.
서버가 종료되어도 백그라운드에서 노드 서버 실행
서버 종료는 npx pm2 kill : 종료
// 리스트 확인 npx pm2 list : 리스트





*/
/* eslint-disable no-undef */
// 빌드 폴더안에 컴파일된 Baseball.json을 가져온다.
const Baseball = artifacts.require("Baseball");

module.exports = (deployer) =>{
    // deployer.deploy 메서드로
    // 가져온 json파일 내용으로 배포를 진행
    deployer.deploy(Baseball);
}



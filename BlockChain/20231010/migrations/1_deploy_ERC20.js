const ERC20 = artifacts.require("ERC20");

module.exports = (deployer) => {
    // deploy 배포할 컨트랙트 인스턴스를 매개변수로 전달할건데.
    // truffle에서 배포할때 생성자 함수 매개변수를 어떻게 넣어줘야하나.
    // deploy 메서드에서는 첫번째 매개변수로 인스턴스를 전달했으면
    // 뒤에 매개변수로, 순서대로 생성자 함수의 매개변수를 넣어주면 된다.

    // deployer.deploy(ERC20); 원래 이렇게 하면 됐었음
    deployer.deploy(ERC20, "SoonToken", "STK", 10000);
}
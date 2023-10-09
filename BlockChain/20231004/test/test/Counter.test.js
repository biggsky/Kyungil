/* eslint-disable no-undef */
const Counter = artifacts.require("Counter");

// contract는 테스트 케이스를 정의하기 위한 최상위 구조
contract("Counter", (account)=>{
    // account 네트워크에 있는 계정들이 들어온다. 매개변수
    console.log(account);
    // describe 테스트 그룹 단위
    describe("counter contract", ()=>{
        // it 테스트 단위
        let counter;
        it("counter 1", async()=>{
            // 테스트 내용
            // 배포한 컨트랙트를 조회
            // 컨트랙트의 인스턴스를 담아주고
            counter = await Counter.deployed();
        });

        it("counter 2", async()=>{
            console.log(await counter.getValue.call());
        });

        it("counter 3", async()=>{
            await counter.setValue(20);
            console.log(await counter.getValue.call());
        })

    })
});
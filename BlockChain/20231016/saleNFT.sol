// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./myNFT.sol";

contract SaleNFT {
    // 누가 판매등록을 한 NFT들이 보여야 하니까
    // 판매금액이 얼마인지를 다루는 컨트랙트

    // 상호작용할 CA의 주소가 필요하다.
    MyNFT public _nft;
    // CA 상호작용할 컨트랙트를 담을 상태 변수

    constructor(address _nftCA){
        _nft = MyNFT(_nftCA);
        // 상호작용할 CA 인스턴스 생성
    }

    function _saleNFTmint(string memory url) public {
        // CA에서 CA로 메시지 전송 메서드 실행
        _nft.minting(url);
    }

    // 판매에 대한 내용의 함수를 작성을 하고
    // saleNFT에서 myNFT로 메시지를 보내서 NFT 권한을 위임받는 함수를 실행 해보자.

    function setApprovalForAll() public {
        // 판매 컨트랙트가 지금 컨트랙트를 실행시킨사람의 NFT 모든 권한을 위임받았다.
        _nft.setAppAll(msg.sender, address(this), true);
    }

    // 검증할때, 값이 있는지 없는지를 확인, 값을 비교,
    // 실행시킨 사람이 판매 컨트랙트에게 NFT의 권한을 위임했는지 확인하는 함수
    function salesNFT() public view returns (bool) {
        return _nft.isApprovedForAll(msg.sender, address(this));
    }

    // 판매 내용
    // 누가 판매등록했는지 담을 상태변수등
    // 금액은 얼마로 설정했는지
    // 판매에 대한 시기
    // 구매자가 구매의사를 표현하면서 구매 신청을 할때 상품의 금액만큼 CA에 이더를 보낸다.
    // 판매자가 확인을 할 수 있고, 판매확인 버튼을 누르면 이더를 받고 소유권을 구매자에게 넘긴다.
    // 그럼 거래 끝.
}

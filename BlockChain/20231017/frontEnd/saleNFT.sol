// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./myNFT.sol";

contract saleNFT {
    MyNFT public _nft;
    // 상호작용할 ca 인스턴스 생성

    constructor(address _nftCA){
        _nft = MyNFT(_nftCA);
        // 상호작용할 ca 인스턴스 생성
    }

    function _saleNFTmint(string memory url) public {
        _nft.minting(url);
    }

    function setApprovalForAll() public {
        // 판매 컨트랙트가 지금 컨트랙트를 실행시킨 사람의 nft 모든 권한을 위임받았다.
        _nft.setAppAll(msg.sender, address(this), true);
    }

    function salesNFT() public view returns (bool) {
        return _nft.isApprovedForAll(msg.sender, address(this));
    }
    // 예를 들어, Alice가 스마트 계약 Bob에 대해 모든 토큰을 위임하였는지 확인하려면, Bob이 isApprovedForAll(Alice, Bob)을 호출하여 확인할 수 있습니다.
    
    // 소유권을 이전하는 코드
    // 판매등록이 되면은 상태변수를 저장해놓고,
    // 안에 있는 상태변수값 보여주면 

    // -----------------------------------------------------------
    // hard
    // mapping(uint256 tokenId => mapping(address Ipfsvalue => uint product_price)) private mapping_sales_registration;

    // 판매등록한 토큰을 말해주려고 : tokenId
    // 어떤 토큰이 판매중인지

    // obj제목 = {
    //     tokenId : mapping("QmaNAfgnukzosjjG7deDJrKQ8ctFX1yhLAFy9AJTRtSD9N" => 상품가격)
    // }

    // -----------------------------------------------------------

    // try
    // mapping(uint256 tokenId => uint256 product_price)[] public mapping_sales_registration;

    struct SaleInfo{
        uint256 product_price;
        address account;
    }

    // uint256[] registrationArr; struct를 써주었으니 이거 대신에
    SaleInfo[] public registrationArr;

    mapping(uint256 => uint256) public mapping_sales_registration;

    function sales_registration(uint256 tokenId, uint256 product_price, address account) public {
        // require(_nft.isApprovedForAll(msg.sender, address(this)));
        // mapping_sales_registration[tokenId] = product_price;

        SaleInfo memory sale = SaleInfo(product_price, account);
        registrationArr.push(sale);
    }

    function sales_registration_list() public view returns (SaleInfo[] memory) {
        return registrationArr;
    }

    /*  
    function 구매등록(){
        // 판매 등록되어있는 NFT 페이지에서 구매를 요청하고
        // 구매 등록한 내용을 상태변수에 저장하고(페이지에서 구매자 발생했다는 정보를 판매자에게 보여주고)

        // 구매자는 상품의 금액만큼 CA에 전송(이 컨트랙트에 상품의 금액을 가지고있고)
    }
    function 판매확정(){
        // 페이지에서 판매 확정을 누르면 
        // 소유권을 구매자에게 넘기고
        // CA에서 이더를 받으면 끝
    }
    */






    // 1. mapping활용
    // 2. 배열 메소드 pop,push 리서치
    // 3. RPC 노드 공급자 리서치

    
    // uint token_id_value = 0;
    // uint256[] public arr_value;

    // const a = 1

    // a = 2;
    // const a = Array(2,2,2);
    // a[0].push(10)
    // console.log(a[0])
    // uint count = 0;

    // 판매등록 함수
    // function sales_registration(uint256 tokenId, uint256 product_price) public returns (uint256[] memory) {
    //     require(_nft.isApprovedForAll(msg.sender, address(this)));
    //     // msg.sender가 실행자의 주소 // address(this) 가 현재컨트랙트의 주소
    //     // 위임을 CA에 한적이 있는지 확인
        
    //     // 판매 등록 상품을 mapping에 담아놓고(판매 페이지에서 NFT 보여주기위함 == 상품의 가격)
    //     token_id_value = tokenId;
    //     arr_value[count] = ipfshash_value;

    //     mapping_sales_registration[tokenId] = product_price;
    //     return mapping_sales_registration[tokenId];
    // }


}
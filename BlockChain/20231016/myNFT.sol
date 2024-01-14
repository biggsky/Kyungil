// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}
    
    mapping(uint256 tokenId => string tokenURI) _tokenURIs;
    uint totalSupply = 0;
    
    function minting( string memory tokenURI) public {
        _tokenURIs[totalSupply] = tokenURI;
        _mint(msg.sender, totalSupply);
        totalSupply += 1;
    }

    // tokenURI와 아래 _baseURI는 opensea 사이트에 들어갔을때 자동으로 실행이 됨. 따로 실행시키는 함수는 없음.
    function tokenURI(uint256 _tokenId) public view override returns (string memory){
        // return "QmYw7AxGRzxMxxi7NumrdRMcFbi7aiqFTxdLzXQ77bjZrM";
        // ipfs 해시값
        
        return _tokenURIs[_tokenId];
    }

    function _baseURI() internal view override returns(string memory){
        return "https://ivory-traditional-cod-350.mypinata.cloud/ipfs/";
    }

    // 1017
    // NFT에 관련된 메서드는 여기에
    // NFT의 판매 권한을 줄 함수를 여기에 작성하자
    function setAppAll(address owner, address operator, bool approved) public {
        _setApprovalForAll(owner, operator, approved);
    }

    // NFT의 소유권 및 권한 설정
    // 민팅
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721{
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol){}

    mapping(uint256 tokenId => string tokenURI) _tokenURIs;
    uint totalSupply = 0;


    function minting(string memory _IpfsHash) public {
        _tokenURIs[totalSupply] = _IpfsHash;
        _mint(msg.sender, totalSupply);
        totalSupply += 1;
    }


    // function ranking() public pure returns(string memory) {
    function ranking() public view returns(string memory) {
        string[4] memory _rarity = ["rare", "epic", "unique", "legendary"];
        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, block.coinbase, block.number)
            )
        );
        random = uint(random % 4); // 0~2개까지의 3가지의 랜덤값

        return _rarity[random];
    }

    function nftList() public view returns(string[] memory){
        string[] memory uris = new string[](totalSupply);
        for(uint256 i=0; i< totalSupply; i++){
            uris[i] = _tokenURIs[i];
        }
        return uris;
    }

    function tokenURI(uint256 _tokenId) public view override returns(string memory){
        return _tokenURIs[_tokenId];
    }

    function _baseURI() internal view override returns(string memory){
        return "https://ivory-traditional-cod-350.mypinata.cloud/ipfs/";
    }

    function setAppAll(address owner, address operator, bool approved) public {
        _setApprovalForAll((owner), operator, approved);
    }

}
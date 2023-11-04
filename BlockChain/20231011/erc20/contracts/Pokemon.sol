// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC20.sol";

contract Pokemon is ERC20 {
    constructor() ERC20("Pokemon", "PTK", 100000) {}

    // 포켓몬 객체를 만들것.
    // 이 객체 하나가 포켓몬의 데이터
    struct Pokens {
        string url;
        string name;
    }

    // 포켓몬 빵 구매한 사람들의 주소를 담아놓을것.
    struct Users {
        address account;
    }

    // ERC20 토큰을 지불해서 포켓몬 빵을 하나 사는것.
    // 빵하나에 얼마?
    // 단위를 이더로 지정 10 **18 소수점 단위
    // 가격이 1000토큰
    uint256 private tokenPrice = 1000 ether;

    // 우리가 포켓몬 빵을 사면 랜덤한 스티커가 들어있는데
    // 배열안에 나올 수 있는 포켓몬의 이름을 선언 해두자.
    // 한글을 사용하려면 유니코드 작성 해야함..
    // 영어로 쓰자..
    string[] pokemonName = ["Pikachu", "Squirtle", "Charmander"];

    // 포켓몬 이쁜 이미지를 담아놓을 배열
    string[] pokemonUrl = [
        "https://i.namu.wiki/i/8HsKYgQA_WoAOakInMwBxUJXJwYBA52CuGFEEjntxBobl4Uh_D4pqByBl_ap6XdsoyHaEvOEnm7wUs-XwBf-Hg.gif",
        "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MzBfMTAz/MDAxNDkzNTMzNTYyOTk3.WLjSoAj5KaBRi5Wb1izQXlmlhjHf7ywHJdXbWHEkldQg.K64hxSvEPYKes2pAxorKyFaWUMCNpLPK12trw7es3O4g.GIF.untri0624/1488983626148.GIF?type=w800",
        "https://i.namu.wiki/i/P-ADJBMVxcUwyRFG8lcekyKCXvwx0LjNsiBjDUKB385iy2WCnXo-ZsTVP2VEH6_qzSOeJykNdtRHmHMkmQGFGg.gif"
    ];


    // 사용자의 포켓몬 배열,계좌,카드 를 담는 structure

    struct Trade{
        address users;
        string to_value;
        string card;
    }
    // 구매하면 한개를 얻는데
    // 또 사면 두개
    mapping(address => Pokens[]) public pokemons;
    // {
    // "0x156123443213" : [Pokens{url:"", name:""}, Pokens{url:"", name:""}, Pokens{url:"", name:""}];
    // }

    // 한번이라도 포켓몬 빵을 구매한 사람들의 주소를 가지고 있는 객체
    Users[] public users;

    // 지갑주소가 가지고 있는 포켓몬 조회
    function getPokemon() public view returns (Pokens[] memory) {
        // 사이즈 모를땐 memory
        
        return pokemons[msg.sender];
    }

    function getPokemonUsers() public view returns (Users[] memory) {
        return users;
    }

    function buyPokemon() public {
        require(balances[msg.sender] >= tokenPrice);
        balances[msg.sender] -= tokenPrice;
        totalSupply -= tokenPrice;

        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, block.coinbase, block.number)
            )
        );
        random = uint(random % 3); // 0~2개까지의 3가지의 랜덤값
        // Pokens구조체 형태로 객체를 만들어서 배열에 푸쉬
        pokemons[msg.sender].push(
            Pokens(pokemonUrl[random], pokemonName[random])
        );

        // 유저가 포켓몬빵을 한번 산적이 있는지
        bool isUser = false;
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].account == msg.sender) {
                isUser = true;
                break;
            }
        }

        if (!isUser) {
            users.push(Users(msg.sender));
        }
    }


    function checkapprove() public view returns (Pokens[] memory) {
        // 사이즈 모를땐 memory
        return pokemons[msg.sender];
    }

    function transferPokemon(address to_value, string memory card) public  returns (Pokens[] memory) {
        Pokens[] storage pokemon = pokemons[msg.sender];
        uint lastIndex = pokemon.length -1;

        for(uint8 i=0; i<pokemons[msg.sender].length; i++){
            if(keccak256(abi.encodePacked((pokemons[msg.sender][i].name))) == keccak256(abi.encodePacked((card)))){
                // storage x memory o
                Pokens memory temp = pokemons[msg.sender][i];
                pokemons[msg.sender][i] = pokemons[msg.sender][lastIndex];
                pokemons[msg.sender][lastIndex] = temp;
                
                pokemons[to_value].push(Pokens(pokemons[msg.sender][lastIndex].url, pokemons[msg.sender][lastIndex].name));
                pokemons[msg.sender].pop();
                break;
            }
        }

        // Trade memory trade;
        // trade.users=msg.sender;
        // trade.to_value=to_value;
        // trade.card=card;

        return pokemons[msg.sender];
    }

    // ?????????????
    // function transferPokemon(string memory to_value, string memory card) public returns (Trade memory) {
    //     string[] memory arr = new string[](3);
    //     arr[0] = users[msg.sender];
    //     arr[1] = to_value;
    //     arr[2] = card;

    //     return arr;
    // }
}

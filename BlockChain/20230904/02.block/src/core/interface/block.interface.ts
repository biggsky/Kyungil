interface IBlockHeader {
    version : string;
    height : number;
    timestamp : number;
    previousHash : string;
}

interface IBlock extends IBlockHeader{
    merkleRoot : string;
    hash : string;
    nonce : number;
    difficulty : number;
    data : string[];
}

export {IBlockHeader, IBlock}
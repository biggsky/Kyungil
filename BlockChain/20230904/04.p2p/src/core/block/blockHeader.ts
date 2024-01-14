import {IBlock, IBlockHeader } from "@core/interface/block.interface";

export class BlockHeader implements IBlockHeader{
    version: string;
    height: number;
    timestamp: number;
    previousHash: string;
    constructor(_previousBlock : IBlock){
        // 이전 블록 받는 이유는 이전블록에 대한 정보가 필요하니까

        // 블록을 생성할때 이전 블록의 정보가 필요하다.
        // 이전블록의 해시, 높이
        this.version = BlockHeader.getVersion();
        this.timestamp = BlockHeader.getTimeStamp();
        this.height = _previousBlock.height + 1;
        this.previousHash = _previousBlock.hash;
    }

    static getVersion(){
        return "1.0.0"
    }

    static getTimeStamp(){
        // return new Date.now()
        return new Date().getTime();
    }
}




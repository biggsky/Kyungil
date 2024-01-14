import { BaseDTO } from "../database/baseDTO";
import { TokenData } from "./Token.model";

export default class TokenDTO extends BaseDTO implements TokenData {
    public contractAddress: string;
    public name: string;
    public symbol: string;
    public ownerAddress: string;
    public decimal: number;
    public circulatingSupply: number;

    constructor(body : TokenData){
        super();
        this.contractAddress = body.contractAddress;
        this.name = body.name;
        this.symbol = body.symbol;
        this.ownerAddress = body.ownerAddress;
        this.decimal = body.decimal;
        this.circulatingSupply = body.circulatingSupply;
        this.createDTO(this);
    }
}
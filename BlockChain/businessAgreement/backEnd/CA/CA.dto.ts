import { BaseDTO } from "../database/baseDTO";
import { CAData } from "./CA.model";

export default class CADTO extends BaseDTO implements CAData {
  public address: string;
  public CAtype: string;
  public abiSigniture: string[];
  public signitureNames: string[];
  public abi?: Record<string, any>; // 여기서 abi는 JSON 데이터의 구체적인 형태에 따라 조정할 수 있습니다.

  constructor(body: CAData) {
    super();
    this.address = body.address;
    this.abiSigniture = body.abiSigniture;
    this.signitureNames = body.signitureNames;
    this.CAtype = body.CAtype;
    this.abi = body.abi;
    this.createDTO(this);
  }
}

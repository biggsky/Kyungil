import { BaseDTO } from "../database/baseDTO";
import { EOAData } from "./EOA.model";

export default class EOADTO extends BaseDTO implements EOAData {
  public address: string;
  public token: bigint;
  public ethBalance: string;

  constructor(body: EOAData) {
    super();
    this.address = body.address;
    this.token = body.token;
    this.ethBalance = body.ethBalance;
    this.createDTO(this);
  }
}

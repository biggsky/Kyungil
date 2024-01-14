import { BaseDTO } from "../database/baseDTO";
import { NFTData } from "./NFT.model";

export default class NFTDTO extends BaseDTO implements NFTData {
  public tokenId: string;
  public name: string;
  public description: string;
  public imageUrl: string;
  public creatorAddress: string;
  public Owner: string;

  constructor(body: NFTData) {
    super();
    this.tokenId = body.tokenId || "";
    this.name = body.name || "";
    this.description = body.description || "";
    this.imageUrl = body.imageUrl || "";
    this.creatorAddress = body.creatorAddress || "";
    this.Owner = body.Owner || "";
    this.createDTO(this);
  }
}

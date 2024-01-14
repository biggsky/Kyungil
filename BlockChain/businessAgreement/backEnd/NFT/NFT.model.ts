import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import { Tx } from "../Tx/Tx.model";

export interface NFTData {
  tokenId?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  creatorAddress?: string;
  Owner?: string;
  address?: string;
  transactionhash?: string;
}

@Table({
  timestamps: true,
  underscored: false,
  modelName: "NFT",
  tableName: "nfts",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class NFT extends Model implements NFTData {
  @Column({
    type: DataType.STRING(150),
    allowNull: true,
  })
  tokenId!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: true,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  imageUrl!: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: true,
  })
  creatorAddress!: string;
  @Column({
    type: DataType.STRING(150),
    allowNull: true,
  })
  address!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: true,
  })
  Owner!: string;

  // foreign key 연결 구간
  @HasMany(() => Tx, "NFT_id")
  txs!: Tx[];
}

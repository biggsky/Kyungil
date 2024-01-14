import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { Tx } from "../Tx/Tx.model";
import { EOA } from "../EOA/EOA.model";
import { TokenEOA } from "../TokenEoa/Token_EOA.model";

export interface TokenData {
  contractAddress: string;
  name: string;
  symbol: string;
  ownerAddress: string;
  decimal: number;
  circulatingSupply: number;
}

@Table({
  timestamps: true,
  underscored: false,
  modelName: "Token",
  tableName: "tokens",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class Token extends Model implements TokenData {
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  contractAddress!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  symbol!: string;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  ownerAddress!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  decimal!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  circulatingSupply!: number;

  // foreign key 연결 구간
  @HasMany(() => Tx, "token_id")
  txs!: Tx[];
  @BelongsToMany(() => EOA, () => TokenEOA)
  EOAs!: EOA[];
}

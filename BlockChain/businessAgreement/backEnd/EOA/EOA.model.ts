import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { Tx } from "../Tx/Tx.model";
import { TxEOA } from "../TxEOA/TxEOA.model";
import { Token } from "../Token/Token.model";
import { TokenEOA } from "../TokenEoa/Token_EOA.model";

export interface EOAData {
  address: string;
  token: bigint;
  ethBalance: string;
}

@Table({
  timestamps: true,
  underscored: false,
  modelName: "EOA",
  tableName: "eoas",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class EOA extends Model implements EOAData {
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  token!: bigint;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  ethBalance!: string;

  // foreign key 연결 구간
  // N:M 관계 설정
  @BelongsToMany(() => Tx, () => TxEOA)
  txs!: Tx[];

  @BelongsToMany(() => Token, () => TokenEOA)
  tokens!: Token[];
}

import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import { NFT } from "../NFT/NFT.model";
import { Token } from "../Token/Token.model";
import { Block } from "../Block/Block.model";
import { TxCA } from "../TxCA/TxCA.model";
import { TxEOA } from "../TxEOA/TxEOA.model";
import { CA } from "../CA/CA.model";
import { EOA } from "../EOA/EOA.model";

export interface TxData {
  accessList: string[];
  chainId: bigint;
  from: string;
  gas: bigint;
  gasPrice: bigint;
  hash: string;
  input: string;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  r: string;
  s: string;
  to: string;
  transactionIndex: bigint;
  type: bigint;
  v: bigint;
  value: string;
  Method: string;
  blocknumber: number;
  Timestamp: bigint;
}

@Table({
  timestamps: true,
  underscored: false,
  modelName: "Tx",
  tableName: "txs",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class Tx extends Model implements TxData {
  @Column({
    type: DataType.ARRAY(DataType.TEXT),
    allowNull: true,
  })
  accessList!: string[];

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  chainId!: bigint;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  from!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  gas!: bigint;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  gasPrice!: bigint;

  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  hash!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  input!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  maxFeePerGas!: bigint;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  maxPriorityFeePerGas!: bigint;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  r!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  s!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  to!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  transactionIndex!: bigint;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  type!: bigint;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  v!: bigint;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  value!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true, // 테스트용으로 잠시 true로 한다
  })
  Method!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: true, // 테스트용으로 잠시 true로 한다
  })
  Timestamp!: bigint;
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  blocknumber!: number;

  // foreign key 연결 구간
  @BelongsTo(() => NFT, "NFT_id")
  nft!: NFT;

  @BelongsTo(() => Token, "token_id")
  token!: Token;

  @BelongsTo(() => Block, "block_id")
  block!: Block;
  @BelongsToMany(() => CA, () => TxCA)
  cas!: CA[];
  @BelongsToMany(() => EOA, () => TxEOA)
  eoas!: EOA[];
}

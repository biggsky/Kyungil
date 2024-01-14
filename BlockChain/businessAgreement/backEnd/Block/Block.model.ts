import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Tx } from "../Tx/Tx.model";

export interface BlockData {
  number: bigint;
  hash: string; // 선택적으로 만들거나 'string'으로 지정
  parentHash: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: bigint;
  extraData: string;
  gasLimit: bigint;
  gasUsed: bigint;
  timestamp: bigint;
  baseFeePerGas: bigint;
  withdrawalsRoot?: string; // 'withdrawalsRoot'를 선택적으로 변경
  nonce: bigint;
  mixHash: string;
  txcount: number;
}

@Table({
  timestamps: true,
  underscored: false,
  modelName: "Block",
  tableName: "blocks",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class Block extends Model implements BlockData {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  number!: bigint;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  hash!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  parentHash!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  sha3Uncles!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  logsBloom!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  transactionsRoot!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  stateRoot!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  receiptsRoot!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  miner!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  difficulty!: bigint;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  extraData!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  gasLimit!: bigint;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  gasUsed!: bigint;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  timestamp!: bigint;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  baseFeePerGas!: bigint;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  withdrawalsRoot?: string; // 'withdrawalsRoot'를 선택적으로 변경

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  nonce!: bigint;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  mixHash!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  txcount!: number;

  // foreign key 연결 구간
  @HasMany(() => Tx, "block_id")
  txs!: Tx[];
}

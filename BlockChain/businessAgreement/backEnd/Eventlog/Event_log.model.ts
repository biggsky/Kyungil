// EventLog.model.ts

import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { CA } from "../CA/CA.model";
import { CAEventLog } from "../CaEventlog/CaEventlog.model";
export interface Event_log {
  address: string;
  blockHash: string;
  blockNumber: bigint;
  data: string;
  logIndex: bigint;
  removed: boolean;
  transactionHash: string;
  transactionIndex: bigint;
  event: string;
  signature: string;
  topics: string[];
  returnValues: string[];
}

@Table({
  timestamps: true,
  underscored: false,
  modelName: "EventLog",
  tableName: "eventLogs",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class EventLog extends Model {
  @Column({
    type: DataType.STRING(150),
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING(66), // Ethereum block hash length
    allowNull: false,
  })
  blockHash!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  blockNumber!: bigint;

  @Column({
    type: DataType.STRING, // Adjust the data type according to your needs
    allowNull: false,
  })
  data!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  logIndex!: bigint;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  removed!: boolean;

  @Column({
    type: DataType.STRING(66), // Ethereum transaction hash length
    allowNull: false,
  })
  transactionHash!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  transactionIndex!: bigint;

  // Add other necessary columns...

  @Column({
    type: DataType.STRING, // Adjust the data type according to your needs
    allowNull: false,
  })
  event!: string;

  @Column({
    type: DataType.STRING, // Adjust the data type according to your needs
    allowNull: false,
  })
  signature!: string;

  @Column({
    type: DataType.JSON, // Adjust the data type according to your needs
    allowNull: false,
  })
  topics!: string[];

  @Column({
    type: DataType.JSON, // Adjust the data type according to your needs
    allowNull: false,
  })
  returnValues!: string[];

  @BelongsToMany(() => CA, () => CAEventLog)
  cas!: CA[];
  // 다른 필요한 속성들 추가 가능
}

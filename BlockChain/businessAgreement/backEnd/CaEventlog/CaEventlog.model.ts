// CAEventLog.model.ts

import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { CA } from "../CA/CA.model";
import { EventLog } from "../Eventlog/Event_log.model";

@Table({
  timestamps: true,
  underscored: false,
  modelName: "CAEventLog",
  tableName: "caEventLogs",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class CAEventLog extends Model {
  @ForeignKey(() => CA)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  caId!: number;

  @ForeignKey(() => EventLog)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventLogId!: number;
}

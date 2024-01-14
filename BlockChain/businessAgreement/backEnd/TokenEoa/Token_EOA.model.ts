import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { EOA } from "../EOA/EOA.model";
import { Token } from "../Token/Token.model";
@Table({
  timestamps: true,
  underscored: false,
  modelName: "TokenEOA",
  tableName: "tokenEoas",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class TokenEOA extends Model {
  @ForeignKey(() => EOA)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eoaid!: number;

  @ForeignKey(() => Token)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tokenid!: number;
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  amount!: string;
  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  name!: string;
  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  symbol!: string;

  @BelongsTo(() => EOA)
  eoa!: EOA;

  @BelongsTo(() => Token)
  token!: Token;
}

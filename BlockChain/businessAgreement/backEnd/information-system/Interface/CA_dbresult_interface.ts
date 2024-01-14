import { Model } from "sequelize-typescript";

export interface CAData {
  id: number;
  address: string;
  CAtype: string;
  abiSigniture: string[];
  signitureNames: string[];
  updatedAt: Date;
  createdAt: Date;
  abi: Record<string, any> | null;
}

export interface CAPreviousData {
  address: string;
  CAtype: string;
  abiSigniture: string[];
  signitureNames: string[];
  id: number;
  abi: Record<string, any> | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CAInstance extends Model {
  dataValues: CAData;
  _previousDataValues: CAPreviousData;
  uniqno: number;
  _changed: Set<number>;
  _options: {
    isNewRecord: boolean;
    _schema: any;
    _schemaDelimiter: string;
    attributes: any;
    include: any;
    raw: any;
    silent: any;
  };
  isNewRecord: boolean;
}

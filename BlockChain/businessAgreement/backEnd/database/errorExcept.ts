import { Request, Response, NextFunction } from 'express';
import { Error } from "sequelize";

export const ErrorFn = (err : Error, req : Request, res : Response, next : NextFunction)=>{
    const status = err.name || 500;
    res.json({
      status : status,
      msg : err.message
    })
  }
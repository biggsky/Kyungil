import { IResponseDataSequlErr } from "./interface";

export const isResponseDataSequlErr = (
  data: any,
): data is IResponseDataSequlErr => {
  return data && data.status === "SequelizeConnectionError";
};


import { IResponseDataSequlErr } from "../interface";
import { isResponseDataSequlErr } from "../utils";
import { IResponseTokenData, ITokenListData } from "./interface";
const filterT0 = (time: string) => {
  let indexOfTOO = time.indexOf("T0");
  if (indexOfTOO !== -1) {
    time = time.substring(0, indexOfTOO);
  }
  return time;
};

export const getTokenDetail = async (tokenName: string) => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/token/find/${tokenName}`,
      { next: { revalidate: 300 } }
    );

    const responseTokenData: IResponseTokenData | IResponseDataSequlErr = await res.json();
    if(isResponseDataSequlErr(responseTokenData)){
      return null;
    }
    responseTokenData.createdAt = filterT0(responseTokenData.createdAt);
    return responseTokenData;
  } catch (error) {
    console.log(error);
  }
};

import { IResponseDataSequlErr } from "../interface";
import { isResponseDataSequlErr } from "../utils";

export const getNftActivity = async () => {
    const res = await fetch(
        `${
            process.env.NODE_ENV == "development"
            ? "http://localhost:8080"
            : "https://api.bouncexplorer.site"
        }/txs`,
        {
            cache : "no-cache",
        }
    );
    const resActivityData:IResponseDataSequlErr = await res.json();
    if(isResponseDataSequlErr(resActivityData)){
        return null;
    }
    console.log("뜸?",resActivityData);
    // return resActivityData;
}
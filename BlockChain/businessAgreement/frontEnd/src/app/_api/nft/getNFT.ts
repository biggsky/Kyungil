import { IResponseDataSequlErr } from "../interface";
import { isResponseDataSequlErr } from "../utils";
import { INFTListData, IResponseNFTListData } from "./interface";

const filterTOO = (time: string) => {
  let indexOfTOO = time.indexOf("T00");
  if (indexOfTOO !== -1) {
    time = time.substring(0, indexOfTOO);
  }
  return time;
};
export const getNFT = async () => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/nft`,
      { next: { revalidate: 30 } }
    );

    const responseNFTDataList: IResponseNFTListData[] | IResponseDataSequlErr = await res.json();
    if(isResponseDataSequlErr(responseNFTDataList)){
      return null;
    }
    const NFTdataList: INFTListData[] = responseNFTDataList.map(
      (
        {
          Owner,
          createdAt,
          creatorAddress,
          description,
          id,
          imgUrl,
          name,
          tokenId,
        },
        index
      ) => {
        return {
          createdAt: filterTOO(createdAt),
          creatorAddress,
          description,
          id,
          imgUrl,
          name,
          owner: Owner,
          tokenId,
        };
      }
    );

    return NFTdataList;
  } catch (error) {
    console.log(error);
  }
};

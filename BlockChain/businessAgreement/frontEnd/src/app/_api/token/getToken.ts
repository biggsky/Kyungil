import { IResponseTokenData, ITokenListData } from "./interface";

const filterT0 = (time: string) => {
  let indexOfTOO = time.indexOf("T0");
  if (indexOfTOO !== -1) {
    time = time.substring(0, indexOfTOO);
  }
  return time;
};
export const getToken = async () => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/token`,
      { next: { revalidate: 30 } }
    );

    const reponseTokenDataList: IResponseTokenData[] = await res.json();
    const tokenListData: ITokenListData[] = reponseTokenDataList.map(
      ({
        circulatingSupply,
        contractAddress,
        createdAt,
        decimal,
        id,
        name,
        ownerAddress,
        symbol,
        updatedAt,
      }) => {
        return {
          decimal,
          symbol,
          holder: circulatingSupply,
          id,
          name,
          timeStamp: filterT0(createdAt),
        };
      }
    );

    return tokenListData;
  } catch (error) {
    console.log(error);
  }
};

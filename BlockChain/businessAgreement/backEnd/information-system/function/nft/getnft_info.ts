import { getProvider } from "../config";
import { readjson } from "../collector/getAbiAndAddress";
import CAservice from "../../../CA/CA.service";
import { NFTData } from "../../../NFT/NFT.model";
import NFTservice from "../../../NFT/NFT.service";
import TxService from "../../../Tx/Tx.service";
import TxCAService from "../../../TxCA/TxCA.service";
import { DIRNAME } from "../../JSON";
import path from "path";
import NFTService from "../../../NFT/NFT.service";
import BlockService from "../../../Block/Block.service";
import { URL } from "url"; // Node.js에서 URL 모듈을 사용하기 위해 import

// BlockService.findOneblock 함수에서 반환되는 값에 대한 타입 확인
interface BlockInfo {
  blockNumber: number;
  // 다른 필요한 속성들이 있다면 추가
}

// getnftinfo 함수 내에서 사용할 타입
interface NFTInfo {
  address: string;
  tokenId: string;
  creator: string;
  owner: string;
  transactionhash: string;
}

// getnftinfo 함수 수정
export const getnftinfo = async () => {
  try {
    let web3: any = await getProvider();
    const jsonFilePath = path.join(DIRNAME, "erc721.json");
    const jsonData = await readjson(jsonFilePath);
    const result: any = await CAservice.findCAtype();

    if (result) {
      const tmparr: NFTData[] = [];
      for await (const ca of result) {
        if (ca.dataValues.CAtype === "erc-721") {
          const contract = new web3.eth.Contract(
            jsonData,
            ca.dataValues.address
          );
          const cm = contract.methods as any;
          for (let i = 0; i < ca.dataValues.txs.length; i++) {
            const tmp: any = await BlockService.findOneblock(
              ca.dataValues.txs[i].dataValues.block_id
            );

            let asd = tmp.dataValues.number;

            // let tmparr: NFTData[] = [];
            const pastEvents: any = await contract.getPastEvents("allEvents", {
              fromBlock: Number(tmp.dataValues.number) - 100,
              toBlock: Number(tmp.dataValues.number),
            });
            // console.log(pastEvents);

            const tmparr2: { [tokenId: string]: NFTInfo } = {};
            for (const pastEvent of pastEvents) {
              const tokenId = pastEvent.returnValues.tokenId;
              if (tokenId) {
                if (!tmparr2[tokenId]) {
                  tmparr2[tokenId] = {
                    tokenId,
                    creator: pastEvent.returnValues.to,
                    owner: pastEvent.returnValues.to,
                    transactionhash: pastEvent.transactionHash,
                    address: pastEvent.address,
                  };
                } else {
                  tmparr2[tokenId].owner = pastEvent.returnValues.to;
                }
              }
            }
            console.log(tmparr2);
            const tmparr3 = Object.values(tmparr2);
            for (const value of tmparr3) {
              try {
                const tokenURI: any = await cm.tokenURI(value.tokenId).call();
                let httpURI: string = "";
                console.log("tmparr3,value", tokenURI);
                if (
                  tokenURI.includes("http://") ||
                  tokenURI.includes("ipfs:")
                ) {
                  const ipfsHash = await tokenURI.replace(/^ipfs:\/\//, "");
                  const ipfsGateway = "https://ipfs.io/ipfs/";
                  httpURI = ipfsGateway + ipfsHash;
                } else {
                  try {
                    const regex = /^ipfs:\/\/([^/]+)\/([^/]+)$/;
                    const match = tokenURI.match(regex);
                    const hash = match[1] || "";
                    const filename = match[2];
                    httpURI = hash;
                  } catch (error) {
                    console.log(error);
                  }
                }

                const metadata: any = await fetchDataWithDelay(httpURI);
                const data: NFTData = {
                  tokenId: value.tokenId || "",
                  name: metadata.name || "",
                  description: metadata.description || "",
                  imageUrl: metadata.imageUrl || "",
                  creatorAddress: value.creator || "",
                  Owner: value.owner || "",
                  transactionhash: value.transactionhash || "",
                  address: value.address || "",
                };
                console.log("데이터입니다!!", data);
                const tokenId = data.tokenId?.toString() || "";
                const name = data.name || "";
                const Owner = value.owner || "";
                const address = data.address || "";

                const isDuplicate = await NFTService.isDuplicateNFT(
                  tokenId,
                  address,
                  Owner
                );
                console.log("중복인가?", isDuplicate, tmparr);
                //중복이 아니면 추가한다.

                if (!isDuplicate) {
                  // tmparr.push(data);
                  if (data.transactionhash) {
                    const txDataid = await TxService.getFindone(
                      data.transactionhash
                    );
                    try {
                      await NFTservice.createNFTTest(
                        data,
                        txDataid?.dataValues.id
                      );
                    } catch (error) {
                      console.log("getnftinfo", error);
                    }
                  }
                }
              } catch (error) {
                console.log("getnftinfo", error);
              }
            }
          }
        }
      }
      // console.log("!@#!@#!", tmparr);
      // if (tmparr.length > 0) {
      //   for (const data of tmparr) {
      //     if (data.transactionhash) {
      //       const txDataid = await TxService.getFindone(data.transactionhash);
      //       try {
      //         await NFTservice.createNFTTest(data, txDataid?.dataValues.id);
      //       } catch (error) {
      //         console.log("getnftinfo", error);
      //       }
      //     }
      //   }
      // }
    }
  } catch (error) {
    console.log("getnftinfo", error);
  }
};

async function fetchDataWithDelay(tokenURI: string): Promise<any> {
  try {
    // URL을 구문 분석하고 유효성을 확인

    const parsedUrl = new URL(tokenURI);

    console.log("fetchDataWithDelay", tokenURI);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(tokenURI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    const errresponse = {
      name: `Failed to fetch data`,
      description: "Failed to fetch data",
      imageUrl: "failed",
    };

    return errresponse;
  }
}

"use client";
import React, { useEffect, useState } from "react";
import AddressTabWrap from "./TabWrap";
import TabButton from "@app/_components/tabComponent/Tab";
import AddressTransfer from "./transfer";
import AddressTokenTransfer from "./tokenTransfer";
import AddressNftTransfer from "./NFTTransfer";
import useHydration from "@app/_hooks/useHydration";
import { ItxList } from "@app/_components/transactionTable/interface";
import {
  IAddressMoreInfoTx,
  IAddressNFTTxList,
  IAddressTokenTxList,
} from "../../interface";
import { INFTListData } from "@app/_api/nft/interface";
import { INftTransList } from "@app/(page)/nftTrans/interface";

const AddressMoreInfo: React.FC<{ addressTxList: IAddressMoreInfoTx[] }> = ({
  addressTxList,
}) => {
  const [toggleLabelName, setToggleLabelName] =
    useState<string>("Transactions");
  const toggleHandler = (label: string) => {
    setToggleLabelName(label);
  };
  const [NFTListData, setNFTListData] = useState<IAddressNFTTxList[]>([
    {
      age: "",
      hash: "",
      from: "",
      method: "",
      to: "",
      itemName: "",
      type: "ERC-721",
    },
  ]);
  const [tokenListData, setTokenListData] = useState<IAddressTokenTxList[]>([
    {
      age: "",
      blocknumber: "",
      from: "",
      method: "",
      to: "",
      txHash: "",
      value: "",
    },
  ]);
  const isRendered = useHydration();

  const NFTTxListFilter = (): IAddressNFTTxList[] => {
    return addressTxList
      .map(
        (
          { age, blocknumber, from, method, to, txHash, value, NFTId,NFTName },
          index
        ) => {
          if (NFTId !== null) {
            return {
              age,
              hash: txHash,
              from,
              method,
              to,
              itemName: NFTName,
              type: "ERC-721",
            };
          }
        }
      )
      .filter((el) => {
        return el !== undefined;
      }) as IAddressNFTTxList[];
  };

  const tokenTxListFilter = (): ItxList[] => {
    return addressTxList
      .map(
        (
          { age, blocknumber, from, method, to, txHash,tokenName, tokenId },
          index
        ) => {
          if (tokenId !== null) {
            return {
              txHash,
              method,
              blocknumber,
              from,
              to,
              value:tokenName,
              age,
            };
          }
        }
      )
      .filter((el) => {
        return el !== undefined;
      }) as ItxList[];
  };
  useEffect(() => {
    setNFTListData(NFTTxListFilter());
    setTokenListData(tokenTxListFilter());
  }, [addressTxList]);

  const componentHandler = (label: string) => {
    if (label === "Transactions") {
      return <AddressTransfer txList={addressTxList} lastName="Value" />;
    } else if (label === "Token Transfers(ERC-20)") {
      return (
        tokenListData && (
          <AddressTokenTransfer txList={tokenListData} lastName="Token" />
        )
      );
    } else if (label === "NFT Transfers") {
      return (
        NFTListData && (
          <AddressNftTransfer NFTDataList={NFTListData} lastName="Item" />
        )
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      {isRendered && (
        <>
          <AddressTabWrap>
            <TabButton
              label="Transactions"
              toggleLabelNum={toggleLabelName}
              toggleHandler={toggleHandler}
            />
            <TabButton
              label="Token Transfers(ERC-20)"
              toggleLabelNum={toggleLabelName}
              toggleHandler={toggleHandler}
            />
            <TabButton
              label="NFT Transfers"
              toggleLabelNum={toggleLabelName}
              toggleHandler={toggleHandler}
            />
          </AddressTabWrap>
          {componentHandler(toggleLabelName as string)}
        </>
      )}
    </>
  );
};

export default AddressMoreInfo;

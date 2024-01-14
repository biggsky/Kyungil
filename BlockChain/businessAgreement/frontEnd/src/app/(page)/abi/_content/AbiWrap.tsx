"use client";
import React, { useState, ChangeEvent } from "react";
import AbiPreviewContent from "./AbiPreviewContent";
import AbiContent from "./AbiContent";
import AbiFlie from "./AbiFile";
import useGetProvider from "@app/_hooks/useGetProvider";
import { useRouter } from "next/navigation";
import { putABIJson } from "@app/_api/abi/putABIJson";

const AbiWrap: React.FC = () => {
  const [ca, setCa] = useState<string>("");
  const [abiJson, setAbiJson] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const router = useRouter();
  const web3 = useGetProvider();
  const handleCaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCa(e.target.value);
  };

  const handleAbiJsonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setAbiJson(result);
        }
      };
      reader.readAsText(file);
    }
  };
  const ABIJsonHandler = async () => {
    const jsonData = JSON.parse(abiJson);
    const ABI = jsonData.abi;

    const arr = [];
    const namearr = [];
    for (let i: number = 0; i < ABI.length; i++) {
      try {
        if (
          ABI[i].type === "constructor" ||
          ABI[i].type === "event" ||
          ABI[i].name == null ||
          ABI[i].type === "error"
        ) {
          continue;
        } else {
          namearr.push(ABI[i].name);

          arr.push(web3.eth.abi.encodeFunctionSignature(ABI[i]));
        }
      } catch (error) {
        // console.log(error);
      }
    }
    console.log(arr);
    console.log(namearr);
    const sendData = {
      address: ca,
      CAtype: "",
      abi: JSON.stringify(ABI),
      abiSigniture: JSON.stringify(arr),
      signitureNames: JSON.stringify(namearr),
    };

    const putJSONData = await putABIJson(sendData);

    if (putJSONData === 200) {
      alert("abi 전송이 성공적으로 완료되었습니다.");
      // router.push("/");
    } else {
      alert("서버와 통신에 문제가 생겼습니다.");
    }
  };

  return (
    <div className="dark:bg-datkMode-wrapBG py-1 px-2 m-auto bg-white rounded-lg mb-4 shadow-md min-w-[280px] max-w-[1250px] w-11/12 mt-10 ">
      <div className="border-b-2 border-gray ">
        <AbiContent
          label="Contract Address"
          value={ca}
          onChange={handleCaChange}
        />
        <AbiFlie label="ABI JSON" onChange={handleAbiJsonChange} />
      </div>
      <div className="break-words mt-5">
        <h3 className="text-xl font-semibold m-4">Preview</h3>
        <AbiPreviewContent label="Contract Address" content={ca} />
        <AbiPreviewContent label="ABI JSON" content={abiJson} />
      </div>
      <button
        className="bg-green-500/50 hover:bg-green-500 text-white font-semibold p-2 rounded m-4  text-sm"
        onClick={ABIJsonHandler}
      >
        등록하기
      </button>
    </div>
  );
};

export default AbiWrap;

import React from "react";

interface InfoTapContentProps {
  VolumeContent : string
  MarketContent : string
  CirculatingContent : string

}

const CaInfoTapContent: React.FC<InfoTapContentProps>  = ({VolumeContent,MarketContent,CirculatingContent}) => {
  return (
    <div className="mt-5 w-11/12 m-auto rounded-lg shadow-md  h-auto bg-white  max-h-[600px] py-2 px-2">
      <div>
        <div className="text-sm font-medium mb-3">OVERVIEW</div>
        <div className="text-xs  mb-3">
          Tether gives you the joint benefits of open blockchain technology and
          traditional currency by converting your cash into a stable digital
          currency equivalent.
        </div>
      </div>
      <div>
        <div className="text-sm font-medium mb-3 underline">Market</div>
        <table className="text-xs">
          <tbody>
            <tr>
              <td className="w-[140px]">Volume(24H)</td>
              <td className="w-[15px]">:</td>
              <td>{VolumeContent}</td>
            </tr>
            <tr>
              <td className="w-[140px]">Market Capitalization</td>
              <td className="w-[15px]">:</td>
              <td>{MarketContent}</td>
            </tr>
            <tr>
              <td className="w-[140px]">Circulating Supply</td>
              <td className="w-[15px]">:</td>
              <td>{CirculatingContent}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CaInfoTapContent;

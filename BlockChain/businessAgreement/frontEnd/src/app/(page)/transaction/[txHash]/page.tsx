import ItemTitle from "@app/_components/itemTitle";
import TxContentWrap from "./_contents/ContentWrap";
import { getTxItemData } from "@app/_api/txDetail/getTxItemData";
import { ITransactionDetailData } from "../interface";
import Error from "@app/_components/error";

const Page = async ({ params }: { params: { txHash: string } }) => {
  const transactionItemData: ITransactionDetailData = (await getTxItemData(
    params.txHash
  )) as ITransactionDetailData;
  if (!transactionItemData) {
    return <Error />;
  }
  return (
    <div className="pb-5  max-w-[1250px] m-auto ">
      <ItemTitle title="Transaction Details" />
      <TxContentWrap transactionItemData={transactionItemData} />
    </div>
  );
};

export default Page;

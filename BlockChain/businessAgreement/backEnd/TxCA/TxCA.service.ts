import db from "../database";

const createTxCA = async (txid: number, caid: any) => {
  try {
    await db.models.TxCA.create({
      txId: txid,
      caId: caid,
    });
  } catch (error) {
    console.log("createTxCA", error);
  }
};

export default { createTxCA };

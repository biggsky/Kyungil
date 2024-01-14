import db from "../database";

const createTxEOA = async (txid: number, eoaid: number) => {
  try {
    await db.models.TxEOA.create({
      txId: txid, // tx 테이블의 id 값
      eoaId: eoaid, // eoa 테이블의 id 값
    });
  } catch (error) {
    console.log("createTxEOA", error);
  }
};

export default { createTxEOA };

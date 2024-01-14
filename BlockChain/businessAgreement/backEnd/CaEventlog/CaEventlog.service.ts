import db from "../database";

export const createCaEvnetlog = async (caid: number, eventlogid: number) => {
  try {
    await db.models.CAEventLog.create({
      caId: caid, // tx 테이블의 id 값
      eventLogId: eventlogid, // eoa 테이블의 id 값
    });
  } catch (error) {
    console.log("createTxEOA", error);
  }
};

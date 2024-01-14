import db from "../database";

const createTokenEoa = async (
  tokenId: number,
  eoaId: number,
  amount: number,
  name: string,
  symbol: string
) => {
  try {
    console.log("createTokenEoa", tokenId, eoaId, amount, name, symbol);

    // 중복된 값이 있는지 확인
    const existingTokenEoa = await db.models.TokenEOA.findOne({
      where: {
        eoaid: eoaId,
        tokenid: tokenId,
      },
    });

    if (!existingTokenEoa) {
      // 중복된 값이 없으면 레코드 추가
      await db.models.TokenEOA.create({
        eoaid: eoaId,
        tokenid: tokenId,
        amount: amount,
        name: name,
        symbol: symbol,
      });

      console.log("TokenEOA created successfully.");
    } else {
      console.log("TokenEOA already exists. Not creating a duplicate.");
    }
  } catch (error) {
    console.error("createTokenEoa", error);
  }
};

export default { createTokenEoa };

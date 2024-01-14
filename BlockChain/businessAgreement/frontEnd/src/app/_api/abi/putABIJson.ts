export const putABIJson = async (sendData: {
  address: string;
  CAtype: string;
  abi: string;
  abiSigniture: string;
  signitureNames: string;
}) => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/ca`,
    {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }
  );
  console.log('asdasdasd',res)
  return res.status;
};

import React from "react";

const SearchBar = () => {
  return (
    <div className="m-auto h-16 flex justify-center items-center sm:w-full md:w-2/3 lg:w-1/2 ">
      <input
        className="placeholder:text-sm pl-10  h-10 w-11/12 ring-2 ring-gray bg-searchBarBackGroundColor focus:outline-none focus:ring-2 focus:bg-white focus:ring-gray  rounded-lg"
        placeholder="Search by Address / Txn Hash / Block / Token"
        style={{
          backgroundImage: `url(${"https://svgsilh.com/png-1024/1093183.png"})`,
          backgroundSize: "20px 20px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 10px center",
        }}
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";

import { AddPlaceTopBox, InputBox } from "./Place.styled";

const AddPlaceTop = () => {
  const [place, setPlace] = useState([]);
  const search = "/imgs/icons/search.png";

  return (
    <>
      <AddPlaceTopBox>
        <InputBox>
          <input
            onChange={(e) => {
              setPlace(e.target.value);
            }}
            type="text"
            placeholder="관광지 검색"
          ></input>
          <img src={search}></img>
        </InputBox>
      </AddPlaceTopBox>
    </>
  );
};

export default AddPlaceTop;

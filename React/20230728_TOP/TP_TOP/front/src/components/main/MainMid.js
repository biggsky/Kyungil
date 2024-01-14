import React, { useEffect, useState } from "react";
import "animate.css";

import { MainMidBox, BigLabel, DateBoxWrap, DateBox } from "./Main.styled";

const MainMid = ({ dateSelected, isSearched }) => {
  const [startDate, setStart] = useState("");
  const [endDate, setEnd] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleStarteDate = (e) => {
    // 시작 날짜
    const newStartDate = e.target.value;
    setStart(e.target.value);

    // 끝 날짜를 시작 날짜의 일주일 뒤까지만 선택할 수 있게
    const newMaxDate = new Date(newStartDate);
    newMaxDate.setDate(newMaxDate.getDate() + 7);
    const formattedMaxDate = newMaxDate.toISOString().split("T")[0];

    let endDateInput = document.getElementById("end-date");
    endDateInput.max = formattedMaxDate;
    setEnd("");
  };

  const handleEndDate = (e) => {
    setEnd(e.target.value);
  };

  useEffect(() => {
    if (startDate != "" && endDate != "") {
      dateSelected(startDate, endDate);
    }
  }, [endDate]);

  return (
    <>
      <MainMidBox>
        <BigLabel>언제 떠나시나요?</BigLabel>
        <DateBoxWrap>
          <DateBox>
            <input
              type="date"
              value={startDate}
              min={today}
              onChange={handleStarteDate}
            ></input>
          </DateBox>
          ~
          <DateBox>
            <input
              id="end-date"
              type="date"
              value={endDate}
              min={startDate}
              onChange={handleEndDate}
            ></input>
          </DateBox>
        </DateBoxWrap>
      </MainMidBox>
    </>
  );
};

export default MainMid;

import React from 'react';
import { Popup, PopupContent,DayList,DayListli } from './boarddetail.styled';

const DayPopup = ({ onClose }) => {
    const PopupContentClick = (event) => {
        event.stopPropagation();
      };
    
  return (
    <Popup onClick={onClose}>
      <PopupContent onClick={PopupContentClick}>
        <h3>Day 보기</h3>
        <DayList>
            <DayListli>Day1</DayListli>
            <DayListli>Day2</DayListli>
            <DayListli>Day3</DayListli>
           
        </DayList>
      </PopupContent>
    </Popup>
  );
};

export default DayPopup;

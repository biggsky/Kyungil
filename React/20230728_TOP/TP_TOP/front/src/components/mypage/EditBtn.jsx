import React, { useState, useRef } from 'react';
import { Button } from './mypage.styled';



const EditBtn = ({ change, trySaveUserInfo }) => {
return (
  <Button change={change} onClick={trySaveUserInfo}>
    수정 완료
  </Button>
);
};

export default EditBtn;
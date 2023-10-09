import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from "./MyPagePc.styled";


const EditBtnPc = ({ change }) => {
return (
  <Button change={change}>
    수정 완료
  </Button>
);
};

export default EditBtnPc;
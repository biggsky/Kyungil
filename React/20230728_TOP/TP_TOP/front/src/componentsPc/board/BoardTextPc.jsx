import React from 'react'
import { TextBox } from './boardPc.styled';
import BoardTextDetail from './BoardTextDetailPc';

const BoardTextPc = (props) => {
  return (
    <div>
        <TextBox>
          <BoardTextDetail BoardTitle={props.BoardTitle} UploadUserNickname = {props.UploadUserNickname} />
        </TextBox>
    </div>
  )
}

export default BoardTextPc
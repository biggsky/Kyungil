import styled, { keyframes } from "styled-components";

const Main = styled.div`
  width: 70%;
  min-width: 600px;
  /* height: calc(100vh - 90px); */
  height: auto;
  margin: auto;
  padding: 50px 0 40px 0;

  & .writer-box {
    width: 600px; height: 70px;
    display: flex; align-items: center;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  & .writer-box .nickname {
    font-weight: bold;
    font-size: 18px;
    margin: 0 0 0 10px;
  }
  & .writer-box .profile_img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }
  & .writer-box .profile_img img {
    width: 100%;
  }

  & .btnBox {
    display: flex; justify-content: center;
    margin: 0 0 10px 0;
  }
`;

// header
const HeaderDivPc = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 1px solid silver;

  & .likeBtn {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 20px;
    cursor: pointer;
  }
  & .likesNum {
    position: absolute;
    left: 50px;
  }
  & .dotBox {
    position: absolute;
    width: 70px;
    height: 90px;
    background-color:rgba(0, 0, 0, 0.2);
    z-index: 5;
    display: flex;
    position: relative;
    border-radius: 10px;
    z-index: 20;
    top: 20px; right: -75px;
    display: flex; flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .dotBox .dotBoxBtn {
    cursor: pointer;
    width: 50px;
    height: 30px;
    background-color: white;
    border-radius: 5px;
    border: none;
    margin: 5px 0 5px 0;
    display: flex; justify-content: center; align-items: center;
  }
  & .dotBox .editBtn:hover {
    transform: scale(103%);
    background-color: lightblue;
  }
  & .dotBox .delBtn:hover {
    transform: scale(103%);
    background-color: lightcoral;
  }
`
const LikeSize2 = styled.img`
width: 30px;
height: 30px;
transform: translate(60px);
`

const ImgBoxContainer = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  overflow: hidden;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
`;
const ImgBox = styled.div`
  /* 나중에 이미지를 넣게 된다면 width를 100%만 주고 height는 안줌  */
  width: auto;
  height: 300px;
  background-color: beige;
  display: flex;
  transition: transform 0.3s ease;
`;
const Image = styled.div`
  width: 600px;
  height: 300px;
  display: flex; align-items: center;

  & img {
    width: 100%; height: auto;
  }
`;
const ImageBtnPre = styled.button`
  position: absolute;
  top: 50%;
  background: none;
  color: white;
  z-index: 2;
  border: none;
  transform: translate(0, -50%);
  cursor: pointer;
`;
const ImageBtnNext = styled.button`
  position: absolute;
  background: none;
  color: white;
  right: 0%;
  top: 50%;
  z-index: 2;
  border: none;
  transform: translate(0, -50%);
  cursor: pointer;
`;
const TitleStyle = styled.div`
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: rgb(58, 58, 58);
  float: none;
  font-weight: bold;
  white-space: pre-line;
  padding: 0px 30px;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
`;
const SubContentStyle = styled.div`
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 0.8);
  float: none;
  font-weight: 500;
  white-space: pre-line;
  padding: 20px 30px 20px;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
`;
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
const PopupContent = styled.div`
  position: absolute;
  bottom: 0%;
  background-color: white;
  width: 380px;
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  animation: ${slideInFromBottom} 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
const DayList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  padding: 5px;
  font-size: 20px;
`;
const DayListli = styled.li`
  margin-bottom: 10px;
  margin-left: 15px;
`;

const BtnStyle = styled.div`
  width: 150px;
  height: 30px;
  border: 2px solid LightGray;
  background-color: white;
  border-radius: 3px;
  margin: 5px;
  cursor: pointer;
  display: flex; justify-content: center; align-items: center;
`;
const BoardLine = styled.div`
  width: 600px;
  height: 10px;
  background-color: rgb(239, 239, 239);
  margin-top: 30px;
  margin: auto;
`;
const BoardPlanContainer = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid;
  margin: auto;
`;
const AddStyle = styled.button`
  width: 150px;
  height: 50px;
  display: inline-block;
  float: none;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  border-radius: 4px;
  padding: 7px 12px;
  border: 1px solid rgb(54, 143, 255);
  background-color: rgb(54, 143, 255);
  color: white;
  margin-top: 10px;
`;
const imgStyle = {
  width: "18px",
};

const CommentContainer = styled.div`
  width: 600px;
  height: auto;
  min-height: 200px;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;

  & .comment-show-box {
    border: 1px solid;
  }
`;
const CommentMainPc = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  & .reply-input-box {
    height: 50px;
    display: flex;
    padding: 0 0 0 40px;
    box-sizing: border-box;
}
`
const CommentFormdiv = styled.div`
  list-style: none;
  width: 600px;
  height: 40px;
  border-top: 2px solid;
  border-color: rgb(239, 239, 239);
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  position: fixed; bottom: 0;
  background-color: white;
`;
const CommentInput = styled.input`
  width: 600px;
  height: 38px;
  border: none;
  padding: 0 50px 0 10px;
  outline: none;
  box-sizing: border-box;
`;
const CommentBtn = styled.button`
  border: none;
  font-size: 15px;
  background-color: white;
  font-weight: bold;
  color: #277bc0;
  outline: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  cursor: pointer;

  &:hover {
    font-size: 16px;
  }
`;

export {
  Main,
  HeaderDivPc,
  LikeSize2,

  ImgBoxContainer,
  ImgBox,
  Image,
  TitleStyle,
  SubContentStyle,
  Popup,
  PopupContent,
  DayList,
  DayListli,
  BtnStyle,
  ImageBtnPre,
  ImageBtnNext,
  BoardLine,
  BoardPlanContainer,
  AddStyle,
  imgStyle,

  CommentContainer,
  CommentMainPc,
  CommentFormdiv,
  CommentInput,
  CommentBtn,
};

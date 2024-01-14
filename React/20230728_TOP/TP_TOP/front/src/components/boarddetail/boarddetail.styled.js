import styled, { keyframes } from 'styled-components';

const Main = styled.div`
padding: 50px 0 100px 0;
width: 400px;
height: auto;

& .writer-box {
    width: 400px; height: 50px;
    display: flex; align-items: center;
    padding: 0 10px 0 10px;
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
    width: 35px;
    height: 35px;
    border-radius: 100%;
    overflow: hidden;
  }
  & .writer-box .profile_img img {
    width: 100%;
  }


  & .title {
    box-sizing: border-box;
    overflow-wrap: break-word;
    color: rgb(58, 58, 58);
    float: none;
    font-weight: bold;
    white-space: pre-line;
    padding: 0px 15px;
    font-size: 18px;
    line-height: 1.2;
    letter-spacing: 0px;
    margin: 10px 0 0 0;
    text-align: start;
    width: 400px; height: 30px;
  }
  & .detail {
    box-sizing: border-box;
    overflow-wrap: break-word;
    color: rgba(58, 58, 58, 0.8);
    float: none;
    font-weight: 500;
    white-space: pre-line;
    padding: 0 15px;
    font-size: 14px;
    letter-spacing: 0px;
    width: 400px; height: 35px;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

// pc
const MainPc = styled.div`
width: 100%;
height: auto;
/* background-color: beige; */
padding: 50px 0 180px 0;
`

const MoveBoardBtnPc = styled.div`
width: 100%;
font-size: 30px;
`


const ImgBoxContainer = styled.div`
width: 400px;
height: 250px;
display: flex;
position: relative;
overflow: hidden;
`
const ImgBox = styled.div`
/* 나중에 이미지를 넣게 된다면 width를 100%만 주고 height는 안줌  */
width: auto;
height: 250px;
background-color: beige;
display: flex;
transition: transform 0.3s ease;

/* & div {
  width: 400px; height: 250px;
  overflow: hidden;
  display: flex; justify-content: center; align-items: center;
} */

`
const Image = styled.div`
  width: 400px;
  height: 250px;
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
transform: translate(0,-50%);
`
const ImageBtnNext = styled.button`
position: absolute;
background: none;
color: white;
right: 0%;
top: 50%;
z-index: 2;
border: none;
transform: translate(0,-50%);
`
const TitleStyle = styled.div`
  height: 50px;
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: rgb(58, 58, 58);
  float: none;
  font-weight: bold;
  white-space: pre-line;
  padding: 0 30px;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0px;
  display: flex; align-items: end;
`
const SubContentStyle = styled.div`
width: 390px;
  height: auto;
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 0.8);
  float: none;
  font-weight: 500;
  white-space: pre-line;
  padding: 0 30px;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0px;
  display: flex;
`
const SubContentSpan = styled.span`
    display: flex;
    text-align: initial;
`
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
`
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
bottom:0%;
 background-color: white;
 width: 380px;
  padding: 5px;
  border-top-left-radius:10px;
border-top-right-radius:10px;
animation: ${slideInFromBottom} 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`
const DayList = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
list-style-type: none;
padding: 5px;
font-size: 20px;
`
const DayListli = styled.li`
margin-bottom: 10px;
margin-left: 15px;
`

const BtnStyle = styled.button`
    width: 170px;
    height: 30px;
    border: 2px solid LightGray;
    background-color: white;
    border-radius: 3px;
    margin: 5px;
`
const BoardLine = styled.div`
width: 400px;
height: 10px;
background-color: rgb(239, 239, 239);
margin-top: 30px;
`
const BoardPlanContainer = styled.div`
width: 400px;
height: 600px;
border: 1px solid;
`
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
`
const imgStyle = {
  width: '18px'

};

const CommentContainer = styled.div`
width: 400px;
height: auto;
position: relative;
`

const CommentMain = styled.div`
width: 400px;
height: auto;
overflow: scroll;
position: relative;
padding: 10px 10px;
box-sizing: border-box;

& .reply-input-box {
    height: 50px;
    display: flex;
    padding: 0 0 0 40px;
    box-sizing: border-box;
}
`
const CommentFormdiv = styled.div`
list-style: none;
width: 400px;
height: 40px;
border-top: 2px solid;
border-color: rgb(239, 239, 239);;
display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
position: fixed; bottom: 60px;
background-color: white;
`
const CommentInput = styled.input`
  width: 400px;
  height: 38px;
  border: none;
  padding: 0 50px 0 10px;
  outline: none;
  box-sizing: border-box;
`
const CommentBtn = styled.button`
border: none;
font-size: 15px;
background-color: white;
font-weight: bold;
color: #277bc0;
outline: none;
position: absolute;
right: 1%;
top: 50%;
transform: translate(-1%,-50%);

&:hover {
    color: rgb(54, 143, 255);
  }

`
const CommentProflieImg = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
`
const CommentProflieImg2 = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
margin-right: 5px;
`

const CommentContain = styled.div`
width: 100%;
position: relative;
height: 50px;
margin: 0 0 10px 0;
align-items: center;
display: flex;
`
const CommentContain2 = styled.div`
    display: flex;
    align-items: flex-start;
    width: 70%;
    flex-direction: column;
    margin-left: 10px;

    & .detail {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: start;
    }
`
const CommentContain3 = styled.div`
display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
`
const Recommentdiv = styled.div`
    position: absolute;
    right: 10%;
    top: 30%;
    `
const Recommentbox = styled.div`
position: absolute;
left: 16%;
bottom: 0%;
transform: translate(-16%);
  border: none;
`
const Repliesdiv = styled.div`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    /* border-bottom: 1px solid lightgray; */
    width: 80%; height: 40px;
    padding: 3px;
    position: relative;
`
const RelpyInput = styled.input`
  width: ${(props) => props.width || '250px'};
  height: 32px;
  font-size: 13px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding: 0 10px 0 10px;
  background-color: rgb(233, 233, 233);
`
const RelpyBtn = styled.div`
width: 35px;
color: #277bc0;
border: none;
height: 32px;
border-radius: 15px;
display: flex; justify-content: center; align-items: center;
cursor: pointer;
font-size: 13px; font-weight: bold;
`
const RelpyBtn2 = styled.div`
width: 35px;
color: lightcoral;
border: none;
height: 32px;
border-radius: 15px;
display: flex; justify-content: center; align-items: center;
cursor: pointer;
font-size: 13px; font-weight: bold;
`
const Replyspan = styled.span`
position: absolute;
right: 0%;
`
const MoveBoardBtn = styled.div`
display: flex;
font-size: 20px;
`

const ButtonBox = styled.div`
width: 40px;
height: 100%;
cursor: pointer;
position: relative;
display: flex; justify-content: center; align-items: center;
`
const ShowButtonBox = styled.div`
width: 70px;
height: 80px;
background-color:rgba(0, 0, 0, 0.2);
z-index: 5;
display: flex; justify-content: center; align-items: center;
position: relative;
border-radius: 10px;
position: absolute;
top: 5%;
right: 8%;
`
const EditImg = styled.img`
width: 20px;
height: 20px;
position: absolute;
right: 10px;
`
const HeaderDiv = styled.div`
width: 400px;
height: 40px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid silver;
position: relative;

& .likesNum {
  position: absolute; left: 50px;
}
`
const EditBtnStyle = styled.div`
 width: 50px;
 height: 25px;
 background-color: lightblue;
 position: absolute;
 top: 20%;
 left: 50%;
 transform: translate(-50%,-20%);
 border-radius: 5px;
 border: none;
 display: flex; justify-content: center; align-items: center;
`
const DelBtnStyle = styled.div`
 width: 50px;
 height: 25px;
 background-color:lightcoral;
 position: absolute;
 top: 80%;
 left: 50%;
 transform: translate(-50%,-80%);
 border-radius: 5px;
 border: none;
 display: flex; justify-content: center; align-items: center;
`
const Reasd = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: flex-start;
& div {
  width: 100%;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
}
& .nickname {
  font-weight: bold;
}
`
const CommentEditInput = styled.input`
position: absolute;
width: 220px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  left: 5%;
  top: 40%;

`
const CommentEditButton = styled.button`
position: absolute;
left: 65%;
width: 50px;
top: 50%;
width: 50px;
height: 20px;
border-radius: 15px;
background: lightblue;
border: none;
`
const CommentDelButton = styled.button`
position: absolute;
left: 80%;
top: 50%;
width: 50px;
height: 20px;
border-radius: 15px;
background-color: lightcoral;
border: none;
`
const InputContain = styled.div`

`

const HandleEditCheck = styled.div`
/* background: lightblue;
border: none;
height: 25px;
width: 35px;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
transform: translate(0,1px); */
cursor: pointer;
width: 50px;
height: 30px;
background-color: white;
border-radius: 5px;
border: none;
margin: 5px 0 5px 0;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  background-color: lightblue;
}

`
const HandleDeleteCheck = styled.div`
/* background: lightcoral;
border: none;
height: 25px;
width: 35px;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
transform: translate(0,2px); */
cursor: pointer;
width: 50px;
height: 30px;
background-color: white;
border-radius: 5px;
border: none;
margin: 5px 0 5px 0;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  background-color: lightcoral;
}
`

const LikeSize = styled.img`
width: 22px;
height: 22px;
cursor: pointer;
position: absolute;
top: 15px; right: 45px;
`
const LikeSize2 = styled.img`
width: 30px;
height: 30px;
transform: translate(10px,3px);
cursor: pointer;
`

const CommentEditImg = styled.img`
width: 17px;
height: 17px;
position: absolute;
right: 10px;
top: 18px;
`
const ShowButtonBox2 = styled.div`
/* width: 50px;
height: 80px;
background-color:rgba(0, 0, 0, 0.2);
z-index: 5;
display: flex;
position: relative;
border-radius: 10px;
z-index: 20;
top: 30%;
right: 10%;
display: flex;
justify-content: center; */
position: relative;
width: 70px;
height: 90px;
background-color: rgba(0, 0, 0, 0.2);
z-index: 5;
display: flex;
position: relative;
border-radius: 10px;
z-index: 20;
top: 20px;
/* right: -110px; */
right: ${(props) => props.right || '30px'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Xbtn = styled.div`
position: absolute;
right: 10px;
cursor: pointer;

&:hover {
  font-weight: bold;
}
`

const RelpyBtndiv = styled.div`
  color: lightgray; 
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: black; 
  }
`;

const Nickname = styled.div`
width: 100%;
color: black;
font-weight: 600;
text-align: start;
`


export {
  Main, ImgBoxContainer, ImgBox, Image, TitleStyle, SubContentStyle,
  Popup, PopupContent, DayList, DayListli, BtnStyle, ImageBtnPre, ImageBtnNext,
  BoardLine, BoardPlanContainer, AddStyle, imgStyle, CommentContainer, CommentMain, CommentFormdiv,
  CommentInput, CommentBtn, CommentProflieImg, CommentContain, CommentContain2, Recommentdiv,
  Recommentbox, CommentContain3, Repliesdiv, RelpyInput, RelpyBtn, RelpyBtn2, Replyspan,
  CommentProflieImg2, MoveBoardBtn, ButtonBox, ShowButtonBox, EditImg, HeaderDiv, EditBtnStyle, DelBtnStyle,
  Reasd, CommentEditInput, CommentEditButton, CommentDelButton, InputContain, HandleEditCheck,
  HandleDeleteCheck, LikeSize, CommentEditImg, ShowButtonBox2, LikeSize2, MainPc, MoveBoardBtnPc,Xbtn,SubContentSpan,
  RelpyBtndiv,Nickname
}
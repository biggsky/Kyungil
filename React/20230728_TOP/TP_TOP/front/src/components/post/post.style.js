import { styled } from "styled-components";

const PostTitle = styled.input`
  color: rgb(58, 58, 58);
  width: 350px; 
  height: 35px; 
  padding: 10px;
  border: 2px solid #ccc; 
  border-radius: 8px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0px;
  outline: none;
  margin-top: 15px;
  outline: none;
  box-sizing: border-box;
`;
const PostContent = styled.textarea`
 margin-top: 15px;
  width: 350px;
  height: 150px; 
  color: rgba(58, 58, 58, 0.8);
  font-size: 15px;
  background-color: #f0f0f0; 
  border: 1px solid #ccc; 
  border-radius: 8px; 
  padding: 10px; 
  resize: vertical; 
  outline: none;
  resize: none;
  box-sizing: border-box;
`
const PostPlanContainer = styled.div`
width: 400px;
height: 600px;
`
const PostBtn = styled.div`
  position: absolute;
  left: 50%; transform: translateX(-50%);
  width: 250px;
  height: 50px;
  text-align: center;
  border-radius: 5px;
  background-color: #277bc0;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  display: flex; justify-content: center; align-items: center;
  cursor: pointer;
`
const UploadImgContain = styled.div`
position: relative;
width: 70%;
left: 50%;
transform: translateX(-50%);
height: 300px;
border: 1px solid silver;
display: flex; justify-content: center;
overflow-x: scroll;
`
const UploadImg = styled.div`
margin-top: 10ox;
padding: 6px 15px;
background: var(--main-color-2);
color: black;
cursor: pointer;
margin-bottom: 30px;
`

const ImgInputBtn = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-40%);
  display: none; 
`;

const ShowImg = styled.div`
width: auto;
height: 300px;
margin: 0 5px 0 0;
`
const UploadBtn = styled.div`
position: absolute; left: 50%;
transform: translateX(-50%);
display: flex; justify-content: center; align-items: center;
font-size: 14px; font-weight: bold;
width: 120px;
height: 30px;
border-radius: 5px;
background-color: #277bc0;
position: absolute;
transform: translate(-50%);
color:white;
border: none;
cursor: pointer;
`
const DeleteBtn = styled.button`
width: 10px; height: 10px;
position: absolute;
border: none;
font-size: 20px;
color: red;
background-color: transparent;
`
const ImgContain = styled.div`
position: relative;
`
const ImgStyle = styled.img`
width: auto;
height: 300px;
`

// pc css
const PostContentPc = styled.textarea`
 margin-top: 15px;
  width: 80%;
  height: 350px; 
  color: rgba(58, 58, 58, 0.8);
  font-size: 15px;
  background-color: white; 
  border: 1px solid silver; 
  border-radius: 8px; 
  padding: 10px; 
  resize: vertical; 
  outline: none;
  resize: none;
  box-sizing: border-box;
`

const PostTitlePc = styled.input`
  color: rgb(58, 58, 58);
  width: 80%; 
  height: 35px; 
  padding: 10px;
  border: 1px solid silver; 
  border-radius: 8px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0px;
  outline: none;
  margin-top: 15px;
  outline: none;
`;

const PostBtnPc = styled.div`
  position: absolute;
  left: 50%; transform: translateX(-50%);
  width: 250px;
  height: 50px;
  text-align: center;
  border-radius: 5px;
  background-color: #277bc0;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  display: flex; justify-content: center; align-items: center;
  cursor: pointer;
`



export {PostContent,PostTitle,PostPlanContainer,PostBtn,UploadImgContain,UploadImg
,ImgInputBtn,ShowImg,UploadBtn,DeleteBtn,ImgContain,ImgStyle, PostContentPc, PostTitlePc, PostBtnPc
}
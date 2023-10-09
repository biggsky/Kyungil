import styled from "styled-components";

const MypagePcBox = styled.div`
width: 100%;
height: calc(100vh - 60px);
`

const StyleArrow = styled.div`
  position: absolute;
  left: 10%;
  top: 3%;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 30px;
`;

const Button = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  width: 250px;
  border-radius:  5px;
  height: 50px;
  background-color: ${props => props.change ? '#277bc0' : '#d6d6d6'};
  color: ${props =>props.change ? 'white' :'#989898'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: ${(props) => props.change ? 'pointer' : 'default'};
`;

const StyledProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #277bc0;
  position: absolute;  
  left: 50%;
  top: 20%;
  transform: translate(-50%, -15%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
  background-image: ${(props) => (props.preview ? `url(${props.preview})` : 'none')};
  background-size: cover;
  background-position: center;

  &:hover {
    border: 4px solid #277bc0;
    box-sizing: border-box
  }
`;

const InputBtn = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: none;
`;

const StyledProfileName = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -30%);
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid #64a7fe;
  font-size: 20px;

  & input {
    outline: none;
    border: none;
    text-align: center;
    font-size: 20px;
  }
`;

const Text = styled.div`
  position: absolute;  
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  width: 250px;
  font-size: 12px;
`

const EditNavigate = styled.div`
  position: absolute;
  right: 10%;
  top: 5%;
  cursor: pointer;

  &:hover {
    transform: scale(105%);
  }
`;

const ProflieImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffd8de;
  position: absolute;  
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
  overflow: hidden;

  & img {
    width: 100%;
  }
`

const ProfileName = styled.div`
  position: absolute;

  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
`;

const TabMain = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100vh - 40% - 60px);
  top: 40%;
`;

const TabsContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TabButton = styled.button`
  width: 33.33333333%;
  background-color: ${(props) => (props.active ? "white" : "white")};
  color: #676767;
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid ${(props) => (props.active ? "#277bc0" : "white")};
  cursor: pointer;
`;

const Content = styled.div`
  background-color: #f5f5f5;
  height: calc(100% - 40px);
  border-radius: 0 0 5px 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;
  align-content: flex-start;
`;
const ContentOne = styled.div`
  width: 100%; height: 60px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
  margin: 5px 0 5px 0;
  display: flex;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(100.5%);
  }

  & .index {
    width: 10%; height: 100%;
    display: flex; justify-content: center; align-items: center;
    font-weight: bold;
    position: absolute; top: 0; left: 0;
  }
  & .location {
    width: 40%; height: 50%;
    display: flex; justify-content: start; align-items: end;
    position: absolute;
    top: 0; left: 10%;
    font-weight: bold;
  }
  & .duration {
    width: 70%; height: 40%;
    display: flex; justify-content: start; align-items: start;
    font-size: 12px;
    position: absolute;
    top: 60%; left: 10%;
  }
  & .imgs {
    width: 20%; height: 100%;
    position: absolute; top: 0; right: 5px;
    display: flex; justify-content: end; align-items: center;
    padding: 5px;
    box-sizing: border-box;
  }
  & .imgs img {
    height: 90%;
    border-radius: 10px;
  }
`
const Coming = styled.div`
  height: 15%;
  border-bottom: ${(props) => props.line || '1px solid #277bc0ß'};
  font-size: 10px;
  padding: 5px;
`

export {
  MypagePcBox,
  Button,
  Content,
  ContentOne,
  Coming,
  EditNavigate,
  InputBtn,
  ProfileName,
  ProflieImg,
  StyleArrow,
  StyledImage,
  StyledProfileImg,
  StyledProfileName,
  TabButton,
  TabMain,
  TabsContainer,
  Text,
};

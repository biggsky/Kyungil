import styled, { keyframes } from "styled-components";

export const MainTopBox = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #277bc0;
  border-radius: 0 0 30px 30px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
  border: 3px solid white;
  position: relative;
`;

export const LogoBox = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  box-sizing: border-box;

  & img {
    height: 100%;
    position: absolute;
    left: 40px;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  margin: 0 0 20px 0;
  height: auto;

  & img {
    width: 80%; height: auto;
  }
`;

export const InputBox = styled.div`
  width: 80%;
  height: 60px;
  border-radius: 25px;
  color: white;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  margin: 0px 0 20px 0;
  position: absolute;
  bottom: 20px;

  & img {
    width: 20px;
    height: 20px;
  }
  & input {
    width: 100%;
    height: 40px;
    padding: 10px 0 7px 10px;
    box-sizing: border-box;
    font-size: 18px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1c2120;
  }
`;

export const MainMidBox = styled.div`
  width: 100%;
  height: 35vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 10px 0;
  margin-top: 20%;
  justify-content: start;
  padding-top: 70px;
`;

export const BigLabel = styled.div`
  width: 100%;
  text-align: start;
  font-size: 18px;
  font-weight: bold;
  color: #1c2120;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
  font-size: 40px;
`;

export const DateBoxWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 30px 10px 20px;
`;

export const DateBox = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0 10px 0 10px;
  border: 1px solid silver;
  border-radius: 20px;
  padding: 0 10px 0 10px;

  & input {
    width: 100%;
    border: none;
    font-size: 17px;
    outline: none;
  }
`;

export const MainBottomBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 0 0 70px 0;
  justify-content: start;
`;

export const SmallLabel = styled.div`
  width: 100%;
  text-align: start;
  font-size: 14px;
  font-weight: bold;
  color: #1c2120;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
`;

export const SelectBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  margin: 0 0 10px 0;
`;
export const Select = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: auto;
  height: 30px;
  border-radius: 25px;
  background-color: ${(props) => props.back || "#edebeb"};
  color: ${(props) => props.font || "#9b9a9a"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 10px 7px 0;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px 30px 100px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 15% 60px 0;
`;
export const MakePlanBtn = styled.div`
  padding: 15px;
  box-sizing: border-box;
  width: 15%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #277bc0;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

// 로딩 창
export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
`;

export const LoadingImg = styled.div``;

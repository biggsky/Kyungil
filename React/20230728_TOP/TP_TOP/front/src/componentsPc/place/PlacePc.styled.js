import styled, { keyframes } from "styled-components";

const fadeInAni = keyframes`
    from {
        opacity: 0;
    }to {
        opacity: 1;
    }
`;
const moveAni = keyframes`
    from {
        transform: translateX(50px);
    }to {
        transform: translateX(0px);
    }
`

// AddPlaceTop
export const AddPlaceMid2 = styled.div`
  width: 100%;
  height: 50vh;
  /* background-color: skyblue; */
  overflow: scroll;
  padding: 0 20px 0 0;
  box-sizing: border-box;
`;
export const AddPlaceTopBox = styled.div`
  width: 100%;
  height: auto;
  padding: 60px 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid silver;
`;
export const InputBox = styled.div`
  width: 100%;
  height: 45px;
  color: white;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  box-sizing: border-box;

  & img {
    width: 15px;
    height: 15px;
  }
  & input {
    width: 100%;
    height: 30px;
    padding: 10px 10px 10px 0;
    box-sizing: border-box;
    font-size: 14px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1c2120;
  }
`;

// AddPlaceMid
export const AddPlaceMidBox = styled.div`
  width: 100%;
  height: auto;
  /* background-color: yellow; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10px 0 10px;

  & h3 {
    width: 100%;
    color: #277bc0;
    text-align: start;
    border-bottom: 1px solid #277bc0;
}
`;
export const Title = styled.div`
  width: 100%;
  height: 30px;
  text-align: start;
  font-weight: bold;
  font-size: 20px;
  font-size: ${(props) => props.size || '20px'};
  box-sizing: border-box;
`;
export const PlaceBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin: 0 0 5px 0;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
export const NearPlaceBox = styled.div`
  width: 100%;
  min-height: 70px;
  max-height: 90px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
export const ImgBox = styled.div`
  width: 60px;
  height: 40px;
  left: 5px;
  overflow: hidden;

  & img {
    height: 100%;
  }
`;
export const PlaceName = styled.div`
  display: flex;
  align-items: center;
  left: 55px;
  font-weight: bold;
`;
export const SelectBtnBox = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5px;
`;
export const SelectBtn = styled.div`
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  height: 30px;
  border-radius: 25px;
  background-color: ${(props) => props.back || "#edebeb"};
  color: ${(props) => props.font || "#9b9a9a"};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;
export const PlanMidPcLeft = styled.div`
  position: relative;
  width: 50%;
  height: 90vh;
  /* background-color: beige; */
  /* overflow: hidden; */
`;

export const Wrap1 = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  bottom: 0;
  /* background-color: yellow; */
`;

// AddPlaceBottom
export const ShowSelectedBox = styled.div`
  width: 98%;
  height: 100px;
  /* position: fixed; bottom: 400px; */
  background-color: rgba(0, 0, 0, 0.03);

  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  animation: ${fadeInAni} 0.5s ease-in-out;
  /* position: relative; */
  /* margin-bottom: 20%; */
`;
export const Selected = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  animation: ${moveAni} 0.5s ease-in-out;

  & img {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  & div {
    width: 40px;
    height: 20px;
    margin: 0;
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
`;
export const AddBtn = styled.div`
  width: 39%;
  height: 40px;
  background-color: #277bc0;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInAni} 0.5s ease-in-out;
  cursor: pointer;
`;

export const NearAttractionConatiner = styled.div`
  width: 100%;
  height: auto;
`;

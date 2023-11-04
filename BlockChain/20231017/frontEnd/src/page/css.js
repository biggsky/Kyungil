import styled from "styled-components";
import { img01, img02 } from "../img";

export const StyledComponent = styled.div`
  background-image: url(${img02});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainComponent = styled.div`
  * {
    text-decoration: none;
  }
  #mainBtn {
    width: 100px;
    height: 100px;
    /* background-color: white; */
    margin-right: 10px;
    border: 1px violet;
  }
  #blank {
    width: 500px;
    height: 500px;
    background-color: #ececec;
  }
`;

export const LoginComponent = styled.div`
  width: 500px;
  height: 500px;
  overflow: scroll;
  background-color: #ececec;

  img{
    width: 100px;
    height: 100px;
    
  }
`;

export const SaleComponent = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ececec;
`;

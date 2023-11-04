import "./App.css";
// import Login from "./page/Login";
import { StyledComponent } from "./page/css";
import {Routes, Route, Navigate, BrowserRouter, Link, useNavigate} from "react-router-dom";
import {Main, Login, Sale} from "./page";

function App() {
  return (
    <div className='App'>
      <StyledComponent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main /> } />
            <Route path="/login" element={<Login /> } />
            {/* <Route path="/sale" element={<Sale /> } /> */}
          </Routes>
        </BrowserRouter>
      </StyledComponent>
    </div>
  );
}

export default App;

/*
npm i styled-components
npm i web3
npm i axios
npm i react react-dom
npm install react-router-dom@6
*/

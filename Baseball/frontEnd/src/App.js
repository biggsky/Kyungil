import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

export const Background1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f8ff95;

  & #background2 {
    width: 500px;
    height: 300px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #ede4ff;
  }

  & #background2 button {
    width: 200px;
    height: 50px;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  & #header {
    display: flex;
    width: 100%;
    height: 80px;
    background-color: #6528f7;
  }
  & #header1 {
    width: 200px;
    height: 100%;
    /* background-color: yellow; */
  }

  & #teamName1,
  #teamName2 {
    display: flex;
    width: 100%;
    height: 50%;
    /* background-color: blue; */
  }
  & #teamName1 #left,
  #teamName2 #left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    color: white;
    font-weight: bold;
    /* background-color: red; */
  }
  & #teamName1 #right,
  #teamName2 #right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    border: 1px solid white;
    box-sizing: border-box;
    background-color: #a076f9;
  }

  & #header2 {
    width: 100px;
    height: 100%;
    /* background-color: blue; */
  }
  & #header3 {
    width: 200px;
    height: 100%;
    background-color: #a076f9;
  }

  & #header #diamond {
    display: inline-block;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
  }

  & #header #diamond_transparent {
    display: inline-block;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
  }

  & #sbo {
    width: 100%;
    height: 50px;
    background-color: #d7bbf5;
    font-size: 30px;
  }

  & #strike1,
  #strike2,
  #ball1,
  #ball2,
  #ball3,
  #out1,
  #out2 {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
  }

  & #gap {
    display: inline-block;
    width: 20px;
    /* height: 10px; */
  }
`;

function App() {
  const [start_before, start_after] = useState("");

  const [first_base, setfirst_base] = useState("");
  const [second_base, setsecond_base] = useState("");
  const [third_base, setthird_base] = useState("");

  const [strike1Color, setstrike1Color] = useState("black");
  const [strike2Color, setstrike2Color] = useState("black");

  const [ball1Color, setball1Color] = useState("black");
  const [ball2Color, setball2Color] = useState("black");
  const [ball3Color, setball3Color] = useState("black");

  const [out1Color, setout1Color] = useState("black");
  const [out2Color, setout2Color] = useState("black");

  const startClick = () => {
    start_after("true");
  };

  useEffect(() => {
    if (start_before === "true") {
      const simulationElement = document.getElementById("simulation");
      if (simulationElement) {
        simulationElement.innerHTML = "1";
        setTimeout(() => {
          simulationElement.innerHTML += "<br />" + "2";
        }, 1000);
        setTimeout(() => {
          simulationElement.innerHTML += "<br />" + "3";
        }, 2000);
      }

    }
  }, [start_before]);

  useEffect(() => {
    // 주자 출루
    // setfirst_base("yellow");
    // setsecond_base("yellow");
    // setthird_base("yellow");

    setstrike1Color("#9400FF");
    // setstrike2Color("#9400FF");

    // setball1Color("#ECEE81");
    // setball2Color("#ECEE81");
    // setball3Color("#ECEE81");

    // setout1Color("red");
    // setout2Color("red");
  }, []);

  return (
    <div className='App'>
      <Background1>
        <div id='background2'>
          {start_before == "" ? (
            <button onClick={startClick}>야구게임시작</button>
          ) : (
            <>
              <div id='header'>
                <div id='header1'>
                  <div id='teamName1'>
                    <div id='left'>볼티모어</div>
                    <div id='right'>0</div>
                  </div>
                  <div id='teamName2'>
                    <div id='left'>토론토</div>
                    <div id='right'>0</div>
                  </div>
                </div>

                <div id='header2'>
                  <br />
                  <span
                    id='diamond'
                    style={{ backgroundColor: second_base }}></span>
                  <br />
                  <span
                    id='diamond'
                    style={{ backgroundColor: third_base }}></span>
                  <span id='diamond_transparent'></span>
                  <span
                    id='diamond'
                    style={{ backgroundColor: first_base }}></span>
                </div>

                <div id='header3'>
                  N 1 2 3 4 5 6 7 8 9 <br />
                  B 0 0 0 0 0 0 0 0 0 <br />T 0 0 0 0 0 0 0 0 0
                </div>
              </div>
              <div id='sbo'>
                <span id='sbo'>S</span>{" "}
                <span
                  id='strike1'
                  style={{ backgroundColor: strike1Color }}></span>{" "}
                <span
                  id='strike2'
                  style={{ backgroundColor: strike2Color }}></span>
                <span id='gap'></span>
                <span id='sbo'>B</span>{" "}
                <span id='ball1' style={{ backgroundColor: ball1Color }}></span>{" "}
                <span id='ball2' style={{ backgroundColor: ball2Color }}></span>{" "}
                <span id='ball3' style={{ backgroundColor: ball3Color }}></span>
                <span id='gap'></span>
                <span id='sbo'>O</span>{" "}
                <span id='out1' style={{ backgroundColor: out1Color }}></span>{" "}
                <span id='out2' style={{ backgroundColor: out2Color }}></span>
              </div>

              <div id='simulation'></div>
            </>
          )}
        </div>
      </Background1>
    </div>
  );
}

export default App;

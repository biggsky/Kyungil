import "./App.css";
import {Main, Register, Bulletinboard, Boardinsert, Detailpage} from "./pages";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bulletinboard" element={<Bulletinboard />} />
          <Route path="/boardinsert" element={<Boardinsert /> } />
          <Route path="/detailpage/:id" element={<Detailpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

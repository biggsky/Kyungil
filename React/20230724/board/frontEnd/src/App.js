import './App.css';
import {Routes, Route} from "react-router-dom";
import {Loginpage, Signuppage, BoardPage, Boardinput, Boardupdate} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Loginpage />} />
        <Route path="/signup" element = {<Signuppage />} />
        <Route path="/boardPage" element = {<BoardPage />} />
        <Route path="/boardinput" element = {<Boardinput />} />
        <Route path="/boardupdate/:id" element = {<Boardupdate />} />
      </Routes>
    </div>
  );
}

export default App;

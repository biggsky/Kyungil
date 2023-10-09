import './App.css';
import {Foodorder, Login, Main, Mypage} from "./pages";
import {Routes, Route} from "react-router-dom";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Foodorder" element={<Foodorder />} />
        <Route path='/mypage' element={<Mypage />} />

      </Routes>
    </div>
  );
}

export default App;

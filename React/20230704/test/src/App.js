import {Component } from 'react';
import './App.css';
import {Main} from "./pages/Main";

// 클래스형 컴포넌트로 바꿈(함수형 컴포넌트였음)
class App extends Component {
  render(){
    return (
      <div className="App">
        <Main />
      </div>
    );

  }
  
}

export default App;

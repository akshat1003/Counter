// import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [score, setScore]=useState(0);
  return (
    
    <div className="App">
      <h1 style={{marginLeft: 20}}>Counter</h1>
      <h3 style={{marginLeft: 20}}>The score is {score}</h3>
      <button style={{marginLeft: 20}} onClick={()=>{score<25?setScore(score+1):setScore(score)}}>Increment</button>
      <button style={{marginLeft: 20}} onClick={()=>{setScore(score-1)}}>Decrement</button>
      <button style={{marginLeft: 20}} onClick={()=>{setScore(0)}}>Reset</button>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import init, { fibonacci } from "wasm-lib";

function App() {
  const [num, setNum] = React.useState(0);
  const [ans, setAns] = React.useState(0);
  
  const calc = () => {
    init().then(() => {
      const fib = fibonacci(num);
      setAns(fib);
    })
  }


  return (
    <div className="App">
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={calc}>Calculate</button> 
      <p>{num} fibonacci: {ans}</p>
    </div>
  );
}

export default App;

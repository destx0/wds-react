import { useState,useEffect } from "react";
import "./App.css";

// const Person =  (props) => {
//   return (
//     <>
//       <h1>name: {props.name}</h1>
//       <h2>age: 24</h2>
//     </>
//   )

// }
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("counter changed to "+ counter)
  
    
    
  }, [counter])
  
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default App;

/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter = counter +1
    if (counter < 20) setCounter(counter + 1);
  };

  const subtractValue = () => {
    // counter = counter -1
    if (counter !== 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={subtractValue}>Remove value</button>
    </>
  );
}

export default App;

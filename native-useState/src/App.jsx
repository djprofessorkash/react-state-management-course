import {useState} from "react";

// Single Counter Instance
const Counter = () => {
  const [getCount, setCount] = useState(10);

  const addOne = () => {
    setCount(getCount + 1);
  }

  return <div className="App">
    <button onClick={addOne}>Count = {getCount}</button>
  </div>;
}

// Multiple Independent Counter Instances
const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App;
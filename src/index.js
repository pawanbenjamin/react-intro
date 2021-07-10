import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import MyContext, { ThingsProvider } from "./context";


const Clicker = ({ inc }) => {
  const things = useContext(MyContext)
  console.log(things)
  return <button onClick={inc}>Click Me</button>;
};

const Count = ({ count }) => {
  const things = useContext(MyContext)
  console.log(things)
  return <h1>The Count is {count} </h1>;
};

const App = () => {
  let [count, setCount] = useState(0);

  let stuff = [
    {
      name: 'Pawan'
    }, { name: 'Benjamin'}
  ]

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <ThingsProvider value={stuff}>
      <div>
        <Clicker inc={inc} />
        <Count count={count} />
      </div>
    </ThingsProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

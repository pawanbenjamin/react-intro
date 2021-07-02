import React, { useState } from "react";
import ReactDOM from "react-dom";

const Clicker = ({ inc }) => {
  return <button onClick={inc}>Click Me</button>;
};

const Count = ({ count }) => {
  return <h1>The Count is {count} </h1>;
};

const App = () => {
  let [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Clicker inc={inc} />
      <Count count={count} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

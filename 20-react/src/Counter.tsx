import React, { useState } from "react";

function CounterImpl() {
  let [state, setState] = useState({ number: 0, name: "Jonas" });

  function increment() {
    const newState = { ...state, number: state.number + 1 };
    setState(newState);
    console.log("state", state);
  }

  console.log("Render Counter");
  return (
    <div>
      <h2>Display of Counter.</h2>
      <h1>{state.number}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export const Counter = React.memo(CounterImpl);

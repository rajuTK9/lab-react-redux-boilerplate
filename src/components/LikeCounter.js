import { incrementLike, decrementLike } from "./Redux/Actions";
import React, { useState } from "react";
import countReducer from "./Redux/Reducer";
import { legacy_createStore } from "redux";

const store = legacy_createStore(countReducer);

function LikeCounter() {
  const [count, setCounter] = useState(0);

  const unsubscribe = store.subscribe(() => {
    setCounter(store.getState().count);
  });
  console.log(unsubscribe);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => store.dispatch(incrementLike())}>Like</button>
      <button onClick={() => store.dispatch(decrementLike())}>Dislike</button>
    </div>
  );
}

export default LikeCounter;

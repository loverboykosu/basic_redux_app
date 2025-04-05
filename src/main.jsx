import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createStore } from "redux";

//actions
//Increment
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
//Decrement
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
//Reducer->アクションと前の状態を組み合わせて新しい状態を作成する。
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

//store
let store = createStore(counterReducer);

//consoleに状態を出力
store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

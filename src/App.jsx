import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Hello Redux</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogin ? <h3>ログイン成功</h3> : <h3>ログインしてね</h3>}
      <button onClick={() => dispatch(login())}>ログインorログアウト</button>
    </>
  );
}

export default App;

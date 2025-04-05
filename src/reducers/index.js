import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";

//reducerを組み合わせる
const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;

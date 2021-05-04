import TodoReducer from "./TodoReducers";
import { combineReducers } from "redux";
export default combineReducers({ todoReducer: TodoReducer });

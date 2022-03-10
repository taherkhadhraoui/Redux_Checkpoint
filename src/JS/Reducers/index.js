import { combineReducers } from "redux";
import { todoApp } from "./Todo";
export default combineReducers({ todo: todoApp });

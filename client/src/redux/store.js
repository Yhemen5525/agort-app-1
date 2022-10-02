/** @format */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer, applyMiddleware(thunk));

export default store;

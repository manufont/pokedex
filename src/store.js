import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducer";

const middlewares = [thunk, promise()];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;

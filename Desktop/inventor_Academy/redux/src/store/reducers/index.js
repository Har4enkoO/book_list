import { combineReducers, compose, createStore } from "redux";

import { reducer } from "./reducer";

const reducers = combineReducers({
  reducer,
});

const store = createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

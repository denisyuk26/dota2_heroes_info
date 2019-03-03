import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { heroesList, getUserInput } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    heroesList: heroesList,
    filter: getUserInput
  }),
  {},
  applyMiddleware(logger, thunk)
);

export const urlApi = "https://api.opendota.com";
export default store;

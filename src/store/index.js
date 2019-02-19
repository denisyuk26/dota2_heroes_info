import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {heroesList, getActiveHero} from './reducers';
import thunk from "redux-thunk";


const store = createStore(
    combineReducers({
        heroesList: heroesList,
        activeHero: getActiveHero
    }),
    {},
    applyMiddleware(logger, thunk)
  );
  
export const urlApi = 'https://api.opendota.com';
export default store;
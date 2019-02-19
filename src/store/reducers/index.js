import {GET_ACTIVE_HERO, FETCHING_HEROES_LIST_SUCCESS} from '../types'
const initialState = [];
export function heroesList(state = initialState, action) {
  switch (action.type) {
    case FETCHING_HEROES_LIST_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}

export function getActiveHero (state = null, action) {
    switch (action.type) {
        case GET_ACTIVE_HERO:
            return action.payload
        default:
            return state
    }
}
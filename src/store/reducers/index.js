import { FETCHING_HEROES_LIST_SUCCESS, GET_USER_INPUT, CLEAR_USER_FILTER} from '../types'
const initialState = [];
export function heroesList(state = initialState, action) {
  switch (action.type) {
    case FETCHING_HEROES_LIST_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}


export function getUserInput (state = '', action) {
  switch (action.type) {
    case GET_USER_INPUT:
      return action.payload
      case CLEAR_USER_FILTER: 
      return ''
      default: 
      return state
  }
}
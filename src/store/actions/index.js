import { FETCHING_HEROES_LIST_SUCCESS, GET_USER_INPUT, CLEAR_USER_FILTER} from '../types'
import {urlApi} from '../index'

export const getHeroesList = () => async dispatch => {
    try {
        const response = await fetch(`${urlApi}/api/heroStats/`);
        const heroList = await response.json();
        const heroListIntoState = dispatch({
            type: FETCHING_HEROES_LIST_SUCCESS,
            payload: heroList
        })
        return heroListIntoState;

    } catch (error) {
        console.log(error)
    }
    
}


export const getUserInput = (input) => {
    return {
        type: GET_USER_INPUT,
        payload: input
    }
}

export const clearFilter = () => {
    return {
        type: CLEAR_USER_FILTER,
    }
}
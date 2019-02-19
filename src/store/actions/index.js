import {GET_ACTIVE_HERO, FETCHING_HEROES_LIST_SUCCESS} from '../types'
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

export const getActiveHero = (hero) => {
    localStorage.setItem('hero', hero.id);
    return {
        type: GET_ACTIVE_HERO,
        payload: hero
    }
}


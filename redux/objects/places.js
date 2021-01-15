import * as ActionTypes from '../ActionTypes'

export const places = (state = {
    isLoading: true,
    errMessage: null,
    places: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_PLACES:
            return {...state, isLoading: false, errMessage: null, places: action.payload};
        case ActionTypes.PLACES_LOADING:
            return {...state, isLoading: true, errMessage: null, places: []};
        case ActionTypes.PLACES_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, places: []}
        default:
            return state;
    }
}
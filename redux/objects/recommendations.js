import * as ActionTypes from '../ActionTypes'

export const places = (state = {
    isLoading: true,
    errMessage: null,
    recommendations: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_RECOMMENDATIONS:
            return {...state, isLoading: false, errMessage: null, recommendations: action.payload};
        case ActionTypes.RECOMMENDATIONS_LOADING:
            return {...state, isLoading: true, errMessage: null, recommendations: []};
        case ActionTypes.RECOMMENDATIONS_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, recommendations: []}
        default:
            return state;
    }
}
import * as ActionTypes from '../ActionTypes'

const selected = (state = {
    isLoading: true,
    errMessage: null,
    selected: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_SELECTED_PLACE:
            return {...state, isLoading: false, errMessage: null, selected: action.payload};
        case ActionTypes.SELECTED_PLACE_LOADING:
            return {...state, isLoading: true, errMessage: null, selected: []};
        case ActionTypes.SELECTED_PLACE_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, selected: []}
        default:
            return state;
    }
}

export default selected;
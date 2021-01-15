import * as ActionTypes from '../ActionTypes'

export const users = (state = {
    isLoading: true,
    errMessage: null,
    users: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_USERS:
            return {...state, isLoading: false, errMessage: null, users: action.payload};
        case ActionTypes.USERS_LOADING:
            return {...state, isLoading: true, errMessage: null, users: []};
        case ActionTypes.USERS_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, users: []}
        default:
            return state;
    }
}
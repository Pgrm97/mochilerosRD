import * as ActionTypes from './ActionTypes'
import { database } from '../config';


export const fetchPlaces = () => (dispatch) => {
    database.ref('places').once('value').then((snapshot) => {
        return dispatch(addPlaces(snapshot.val()));
    });
}

export const fetchRecommendations = (user) => (dispatch) => {
    database.ref('recommendations/' + user).once('value').then((snapshot) => {
        console.log('recommendations/' + user);
        return dispatch(addPlaces(snapshot.val()));
    });
}

// export const fetchUsers = () => (dispatch) => {
//     return fetch(baseUrl + 'users')
//         .then(response => {
//             if(response.ok) {
//                 return response;
//             }
//             else {
//                 var error = new Error('Error' + response.status + ':' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         },
//         error => {
//             var errMessage = new Error(error.message);
//             throw errMessage;
//         })
//         .then(response => response.json)
//         .then(users => dispatch(addPlaces(users)))
//         //.catch(error => dispatch(usersFailed(error.message)))
// }


export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = (errMessage) => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMessage
});

export const addUsers = (users) => ({
    type:ActionTypes.ADD_USERS,
    payload: users
});

export const placesLoading = () => ({
    type: ActionTypes.PLACES_LOADING
});

export const placesFailed = (errMessage) => ({
    type: ActionTypes.PLACES_FAILED,
    payload: errMessage
});

export const addPlaces = (places) => ({
    type:ActionTypes.ADD_PLACES,
    payload: places
});

export const recommendationsLoading = () => ({
    type: ActionTypes.RECOMMENDATIONS_LOADING
});

export const recommendationsFailed = (errMessage) => ({
    type: ActionTypes.RECOMMENDATIONS_FAILED,
    payload: errMessage
});

export const addRecommendations = (recommendations) => ({
    type:ActionTypes.ADD_RECOMMENDATIONS,
    payload: recommendations
});
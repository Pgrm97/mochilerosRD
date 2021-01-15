import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import places from './objects/places'
import recommendations from './objects/recommendations'
import users from './objects/users'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            places, recommendations, users
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import places from './reducers/places'
import recommendations from './reducers/recommendations'
import users from './reducers/users'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            places, recommendations, users
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}
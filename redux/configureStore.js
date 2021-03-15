import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import places from './reducers/places'
import recommendations from './reducers/recommendations'
import users from './reducers/users'
import selected from './reducers/selected_place'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            places, recommendations, users, selected
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}
// const createStore  = require("redux");
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import {combineReducers, createStore} from 'redux';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});

let store = createStore(reducers);

export default store;
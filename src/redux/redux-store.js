import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import taskReducer from './task-reducer'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
let reducers = combineReducers({
    taskDivs: taskReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


window.store = store; // just in case i want to see if state was changed
export default store
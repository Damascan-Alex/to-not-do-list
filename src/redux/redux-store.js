import {combineReducers, createStore} from "redux";
import taskReducer from './task-reducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    taskDivs: taskReducer,
    form: formReducer
});

const store = createStore(reducers)


window.store = store; // just in case i want to see if state was changed
export default store
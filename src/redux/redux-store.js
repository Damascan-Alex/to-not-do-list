import {combineReducers, createStore} from "redux";
import taskReducer from './task-reducer'

let reducers = combineReducers({
    taskDivs: taskReducer,
    //form: formReducer - need to create it first 
})

const store = createStore(reducers)


window.store = store; // just in case i want to see if state was changed
export default store
// This reducer create initial state for tasks and add new task inside reducer.

const CREATE_TASK = 'notDoTask/newTask/CREATE_TASK'
const DELETE_TASK = 'notDoTask/Task/DELETE_TASK'
const EDIT_TASK= 'notDoTask/Task/EDIT_TASK'

let initialState= {
    todayTasks: [
        { task: "Create Task Reducer", id: 1, importance: 15, done: true},
        { task: "Test fuck yeah ! is working", id: 2, importance: 3 , done: true},
        { task: "Add new task functionality", id: 3, importance: 8 , done: false },
        { task: "Added need form control", id: 4, importance:  1 , done: false },
        { task: "Make initial template", id: 5, importance: 4, done: true },
        { task: "Add new task functionality", id: 6, importance: 3 , done: false },
        { task: "Mark task as done and not done ", id: 7, importance: 5, done: true },
        { task: "Drag and drop functionality-stuck- do it later", id: 8, importance: 16, done: false },
        { task: "Delete-Functionality", id: 9, importance: 16, done: true },
        { task: "Randmo-ID and add reduxdeTool", id: 10, importance: 16, done: true },
        { task: "Add new text on click", id: 11, importance: 16, done: true },
        { task: "Edit Text on double click", id: 12, importance: 10, done: true },
        { task: "Implement importance functionality", id: 13, importance: 10, done: false },
        { task: "Chnage the importance on double click on color", id: 14, importance: 10, done: false },
        { task: "Implement drag-and drop func", id: 15, importance: 10, done: false },
        { task: "Scrool up and down fuctionality", id: 15, importance: 10, done: true },
      ],
    tomarowTask: [],
}




const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            let newTask = action.addNewTask;
            const IDrandom = Math.floor(Math.random()*1000) //generate random ID
            return {
                ...state,
                todayTasks: [...state.todayTasks, {task: newTask, id: {IDrandom}, importance: 1, done: false}]
            };
        case DELETE_TASK:
            const newList = state.todayTasks.filter((c) => c.id !== action.id);   
            return {
                ...state,
                todayTasks: newList
            }
        case EDIT_TASK: 
            return {
                ...state, // we copy state 
                todayTasks: state.todayTasks.map(tsk => {   // use map to create copy
                    if(tsk.id === action.id) { // find the object with specific ID
                        return {...tsk, task: action.task} // copy object and change one of his func
                    }
                    return tsk
                }),
        }
        default:
            return state;

    }
}

export const newTaskCreator = (addNewTask) => ({type: CREATE_TASK, addNewTask})
export const deleteTaskCreator = (id) => ({type: DELETE_TASK, id})
export const editTaskCreator = (task, id) => ({type: EDIT_TASK, task, id})

export default taskReducer


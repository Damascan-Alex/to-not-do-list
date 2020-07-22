// This reducer create initial state for tasks and add new task inside reducer.

const CREATE_TASK = 'notDoTask/newTask/CREATE_TASK'

let initialState= {
    todayTasks: [
        { task: "Create Task Reducer", id: 354, importance: 1, done: false},
        { task: "Test fuck yeah ! is working", id: 89, importance: 4 , done: false},
        { task: "Add new task functionality", id: 79, importance: 3 , done: false },
        { task: "Start the work", id: 79, importance:  3 , done: false },
        { task: "Make initial template", id: 79, importance: 3, done: true },
        { task: "Add new task functionality", id: 79, importance: 3 , done: false },
        { task: "Mark task as done and not done ", id: 79, importance: 5, done: false },
      ],
    tomarowTask: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            let newTask = action.addNewTask;
            return {
                ...state,
                todayTasks: [...state.todayTasks, {task: newTask, id: 344, importance: 1, done: false}]
            };
        default:
            return state;

    }
}

export const newTaskCreator = (addNewTask) => ({type: CREATE_TASK, addNewTask})

export default taskReducer
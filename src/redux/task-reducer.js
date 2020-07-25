// This reducer create initial state for tasks and add new task inside reducer.

const CREATE_TASK = 'notDoTask/newTask/CREATE_TASK'
const DELETE_TASK = 'notDoTask/Task/DELETE_TASK'

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
        { task: "Delete-Functionality", id: 9, importance: 16, done: false },
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
        case DELETE_TASK:

            const newList = state.todayTasks.filter((c) => c.id !== action.id);
            debugger
            return {
                ...state,
                todayTasks: newList
            }
        default:
            return state;

    }
}

export const newTaskCreator = (addNewTask) => ({type: CREATE_TASK, addNewTask})
export const deleteTaskCreator = (id) => ({type: DELETE_TASK, id})

export default taskReducer

/* handleDelete = (counderID) => {
    const counters = this.state.counters.filter((c) => c.id !== counderID);
    this.setState({ counters: counters });
  }; */
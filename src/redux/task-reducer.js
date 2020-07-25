// This reducer create initial state for tasks and add new task inside reducer.

const CREATE_TASK = 'notDoTask/newTask/CREATE_TASK'
const REORDER_TASK = 'notDoTask/newTask/CREATE_TASK'


let initialState= {
    todayTasks: [
        { task: "Create Task Reducer", id: '354', importance: 15, done: true},
        { task: "Test fuck yeah ! is working", id: '89', importance: 3 , done: true},
        { task: "Add new task functionality", id: '79', importance: 8 , done: false },
        { task: "Added need form control", id: '99', importance:  1 , done: false },
        { task: "Make initial template", id: '989', importance: 4, done: true },
        { task: "Add new task functionality", id: '889', importance: 3 , done: false },
        { task: "Mark task as done and not done ", id: '19', importance: 5, done: true },
        { task: "Drag and drop functionality", id: '29', importance: 16, done: false },
      ],
    tomarowTask: [],
}

console.log(initialState.todayTasks[0])

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            let newTask = action.addNewTask;
            return {
                ...state,
                todayTasks: [...state.todayTasks, {task: newTask, id: '374', importance: 1, done: false}]
            };
        case REORDER_TASK:
            
      
            return {
                ...state,
                todayTasks: [...state.todayTasks, {task:'fuking shit', id: '777', importance: 1, done: false}]

            }

        default:
            return state;

    }
}

export const newTaskCreator = (addNewTask) => ({type: CREATE_TASK, addNewTask})
export const reorderTaskCreator = (reorderTask) => ({type: REORDER_TASK, reorderTask})

export default taskReducer

    /*   let reorderedList = [
                { task: "Create Task Reducer", id: '354', importance: 15, done: true},
                { task: "Test fuck yeah ! is working", id: '89', importance: 3 , done: true},
            ] */



/* const column = this.state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.setState(newState) */

    /*   Action comes from result
    
    const result = {
        draggableId: 'task-1',
        type: 'type',
        reason:'DROP',
        source: {
            droppableId: 'column-1',
            index: 0,
        },
        destination: {
            droppableId: 'column-1',
            index:1,
        }
    };
    
    
    */
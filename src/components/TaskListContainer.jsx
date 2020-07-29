// this conect state from redux

import TaskList from "./TaskList";
import { connect } from "react-redux";
import { newTaskCreator, deleteTaskCreator, editTaskCreator } from "../redux/task-reducer";

let mapStateToProps = (state) => {
  return {
    taskDivs: state.taskDivs,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (NewTask) => {
      dispatch(newTaskCreator(NewTask));
    }, 
    deleteTask: (id) => {
      dispatch(deleteTaskCreator(id));
    }, 

    editTask: (task, id) => {
      dispatch(editTaskCreator(task, id))
    },     
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

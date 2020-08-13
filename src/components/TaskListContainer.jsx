// this conect state from redux

import { connect } from "react-redux";
import TaskList from "./TaskList";
import {
  newTaskCreator,
  deleteTaskCreator,
  editTaskCreator,
  editImportanceCreator,
  doneTaskCreator,
} from "../redux/task-reducer";

const mapStateToProps = (state) => {
  return {
    taskDivs: state.taskDivs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (NewTask, importance) => {
      dispatch(newTaskCreator(NewTask, importance));
    },
    deleteTask: (id) => {
      dispatch(deleteTaskCreator(id));
    },
    doneTask: (id) => {
      dispatch(doneTaskCreator(id)); // crearte action
    },

    editTask: (task, id) => {
      dispatch(editTaskCreator(task, id));
    },

    editImportance: (importance, id) => {
      dispatch(editImportanceCreator(importance, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

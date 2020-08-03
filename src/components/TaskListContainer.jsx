// this conect state from redux

import { connect } from "react-redux";
import TaskList from "./TaskList";
import {
  newTaskCreator,
  deleteTaskCreator,
  editTaskCreator,
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

    editTask: (task, id) => {
      dispatch(editTaskCreator(task, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

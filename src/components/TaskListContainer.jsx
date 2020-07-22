// this conect state from redux

import TaskList from "./TaskList";
import { connect } from "react-redux";
import { newTaskCreator } from "../redux/task-reducer";

let mapStateToProps = (state) => {
  return {
    taskDivs: state.taskDivs,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    createNewTask: (NewTask) => {
      dispatch(newTaskCreator(NewTask));
    }, // now send mesage will accept paramiter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

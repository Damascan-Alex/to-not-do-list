// this conect state from redux

import TaskList from "./TaskList";
import { connect } from "react-redux";
import { newTaskCreator, reorderTaskCreator } from "../redux/task-reducer";

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
    }, 
    
    reorderTask: (reorderTask) => {
      dispatch(reorderTaskCreator(reorderTask));
    },
    // now send mesage will accept paramiter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

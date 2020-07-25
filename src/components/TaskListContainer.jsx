// this conect state from redux

import TaskList from "./TaskList";
import { connect } from "react-redux";
import { newTaskCreator, deleteTaskCreator } from "../redux/task-reducer";

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
    deleteTask: (id) => {
      dispatch(deleteTaskCreator(id));
    }, 
    
    
    // now send mesage will accept paramiter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

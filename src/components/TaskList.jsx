//Task list render all task including those for next day

import React from "react";
import Task from "./task/task";
import s from "./taskList.module.css";
import { reduxForm, Field } from "redux-form";
const TaskList = (props) => {
  
  const {createNewTask} = props;
  let createNewTaskX = (values) => {
    createNewTask(values.addNewTask); // values same as Field names
  };

  return (
    <div>
      <div className={s.taskList}>
        {props.taskDivs.todayTasks.map((tsk) => (
          <Task task={tsk.task} />
        ))}

      <AddTaskReduxForm onSubmit={createNewTaskX} />{" "}
      </div>
            
      <div className={s.tomarowLand}>
        <hr />
        <h5>Tomarowland</h5>
      </div>
    </div>
  );
};


const AddTaskForm = ({ handleSubmit }) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component='textarea'
          name="addNewTask"
          placeholder="Add new task"
       
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

const AddTaskReduxForm = reduxForm({ form: "messageForm" })(AddTaskForm);

export default TaskList;

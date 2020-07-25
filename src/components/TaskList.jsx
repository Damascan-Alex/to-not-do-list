//Task list render all task including those for next day

import React from "react";
import Task from "./task/task";
import s from "./taskList.module.css";
import { reduxForm, Field } from "redux-form";
const TaskList = (props) => {
  const { createNewTask } = props;
  let createNewTaskX = (values) => {
    createNewTask(values.addNewTask); // values same as Field names
  };
 /* let handleDelete = (id) => {
   return(alert(id))
 } */
  return (
    <div>
      <div className={s.taskList}>
        {props.taskDivs.todayTasks.map((tsk) => (
          <Task task={tsk.task} done={tsk.done} importance={tsk.importance} id={tsk.id} handleDelete={props.deleteTask} />
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
          component="textarea"
          name="addNewTask"
          placeholder="Add new task bro"
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

//Task list render all task including those for next day

import React, { useState, useEffect } from "react";
import Task from "./task/task";
import s from "./taskList.module.css";
import { reduxForm, Field } from "redux-form";

const TaskList = (props) => {
  const { createNewTask } = props;
  let createNewTaskX = (values) => {
    debugger;
    createNewTask(values.addNewTask); // values same as Field names
  };
  // When we do a double click on today list should be able to add task
  return (
    <div>
      <div className={s.taskList}>
        <div className={s.listScrool}>
        {props.taskDivs.todayTasks.map((tsk) => (
          <Task
            state={tsk}
            editTask={props.editTask}
            task={tsk.task}
            done={tsk.done}
            importance={tsk.importance}
            id={tsk.id}
            handleDelete={props.deleteTask}
          />
        ))}
        </div>
       
        <AddTaskReduxForm  onSubmit={createNewTaskX} />{" "}
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
    <form onSubmit={handleSubmit} onBlur={handleSubmit} autoFocus={true}
    
     >
      <div>
        <Field
          className={s.edit}
          component="textarea"
          name="addNewTask"
          placeholder="Add new task bro"
          
        />
        <button type='submit'>Add</button>
      </div>

    </form>
  );
};

const AddTaskReduxForm = reduxForm({ form: "taskForm" })(AddTaskForm);

export default TaskList;

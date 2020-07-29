//Task list render all task including those for next day

import React, { useState, useEffect } from "react";
import Task from "./task/task";
import s from "./taskList.module.css";
import AddTaskReduxForm from './newTask'
import ImportanceRange from "./rangeSlider";

const TaskList = (props) => {
  
  return (
    <div>
      <div className={s.taskList}>
        <div className={s.listScrool}>
        {props.taskDivs.todayTasks.map((tsk) => (
          <Task
           
            editTask={props.editTask}
            task={tsk.task}
            done={tsk.done}
            importance={tsk.importance}
            id={tsk.id}
            handleDelete={props.deleteTask}
          />
        ))}
        </div>
       
        <AddTaskReduxForm  onSubmit={(values) => {props.createNewTask(values.addNewTask)}} />{" "}
        <ImportanceRange />

      </div>

      <div className={s.tomarowLand}>
        <hr />
        <h5>Tomarowland</h5>
      </div>
      
    </div>
  );
};



export default TaskList;

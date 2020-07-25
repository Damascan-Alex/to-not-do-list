//Task list render all task including those for next day

import React from "react";
import Task from "./task/task";
import s from "./taskList.module.css";
import { reduxForm, Field } from "redux-form";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const TaskList = (props) => {
  const { createNewTask,reorderTask } = props;
  let createNewTaskX = (values) => {
    createNewTask(values.addNewTask); // values same as Field names
  };

  const onDragEnd =(result) => {
    reorderTask(result)
  
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
      {(provided, snapshot) => ( 
      <div className={s.taskList}
      ref={provided.innerRef} {...provided.droppableProps}
      >
        {props.taskDivs.todayTasks.map((tsk) => (
          <Task task={tsk.task} done={tsk.done} importance={tsk.importance} id={tsk.id} />
        ))}
         {provided.placeholder}
        {/* <AddTaskReduxForm onSubmit={createNewTaskX} />{" "} */}
      </div>
      )}</Droppable>
       
      <div className={s.tomarowLand}>
        <hr />
        <h5>Tomarowland</h5>
      </div>
     
      </DragDropContext>
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

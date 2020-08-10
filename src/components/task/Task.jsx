// This module is responsible of rendering one single task

import React, { useState, useEffect } from "react";
import s from "./task.module.css";

const Task = (props) => {
  debugger;
  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState(props.task);

  /*   useEffect(() => {
    setTask(props.task);
  }, [props.task]);
 */
  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.editTask(task, props.id); // can send each task id to state.
  };

  return (
    <div>
      {!editMode && (
        <div
          onDoubleClick={activateEditMode}
          className={`${s.main} ${props.done ? s.done : ""}`}
        >
          <TaskImportance
            importance={props.importance}
            editImportance={props.editImportance}
            id={props.id}
          />{" "}
          {props.task}
          <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
      )}
      {editMode && (
        <div className={s.main}>
          <input
            onChange={(e) => {
              setTask(e.currentTarget.value);
            }}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={task}
          ></input>
        </div>
      )}
    </div>
  );
};
// this compoent takes care  of the incoming props and generate necesary color.
const TaskImportance = (props) => {
  debugger;
  const [editMode, setEditMode] = useState(false);
  const [importance, setImportance] = useState(props.importance);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.editImportance(importance, props.id);
  };

  const TaskColor = {
    display: "inline-block",
    backgroundColor: `hsl(${(16 - props.importance) * 10}, 100%, 50%)`, //its a bit hardcoded here with value 16
    borderRadius: "50%",
    width: "10px",
    height: "10px",
  };

  return (
    <div>
      <div onClick={activateEditMode} style={TaskColor}></div>
      {editMode && (
        <div>
          {/* This is separate iput range, special for edit mode */}
          <input
            id='range'
            type='range'
            value={importance}
            min='0'
            max='16'
            step='1'
            onChange={(e) => {
              setImportance(e.currentTarget.value);
            }}
            onBlur={deactivateEditMode}
            autoFocus={true}
          />
          <span id='output'>{importance}</span>
        </div>
      )}
    </div>
  );
};
export default Task;

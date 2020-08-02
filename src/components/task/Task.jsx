// This module is responsible of rendering one single task

import React, { useState, useEffect } from "react";
import s from "./task.module.css";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState(props.task);

  useEffect(() => {
    setTask(props.task);
  }, [props.task]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.editTask(task, props.id); // can send each task id to state.
  };

  const onTaskChange = (e) => {
    // this will send only data what we input but not object

    setTask(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div
          onDoubleClick={activateEditMode}
          className={`${s.main} ${props.done ? s.done : ""}`}
        >
          <TaskImportance importance={props.importance} /> {props.task}
          <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
      )}
      {editMode && (
        <div className={s.main}>
          <input
            onChange={onTaskChange}
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
  const TaskColor = {
    display: "inline-block",
    backgroundColor: `hsl(${(16 - props.importance) * 10}, 100%, 50%)`, //its a bit hardcoded here with value 16
    borderRadius: "50%",
    width: "10px",
    height: "10px",
  };
  return <div style={TaskColor}></div>;
};
export default Task;

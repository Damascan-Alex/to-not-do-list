// This module is responsible of rendering one single task

import React from 'react';
import s from './task.module.css'

const Task = (props) => {
  
return <div className={`${s.main} ${props.done ? s.done: ''}`}><TaskImportance importance={props.importance} /> {props.task}
<button onClick={() => props.handleDelete(props.id)}>Delete</button>
</div>
}
// this compoent takes care  of the incoming props and generate necesary color.
const TaskImportance = (props) => {
    const TaskColor = {
        display: 'inline-block',
        backgroundColor: `hsl(${props.importance*10}, 100%, 50%)`,
        borderRadius: '50%',
        width:'10px',
        height: '10px'

      }
    return <div style={TaskColor} ></div>
}
export default Task

//{`banner ${active ? "active" : ""}`}

//className={`${s.main} ${props.done ? s.done: ''}`}
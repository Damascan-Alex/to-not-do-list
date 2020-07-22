// This module is responsible of rendering one single task

import React from 'react';
import s from './task.module.css'

const Task = (props) => {
return <div className={`${s.main} ${props.done ? s.done: ''}`}>{props.task}</div>
}

export default Task

//{`banner ${active ? "active" : ""}`}

//className={`${s.main} ${props.done ? s.done: ''}`}
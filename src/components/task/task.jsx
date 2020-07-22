// This module is responsible of rendering one single task

import React from 'react';
import s from './task.module.css'

const Task = (props) => {
return <div className={s.main}>{props.task}</div>
}

export default Task
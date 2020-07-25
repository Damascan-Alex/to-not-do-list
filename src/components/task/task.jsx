// This module is responsible of rendering one single task
import React from 'react';
import s from './task.module.css'
import { Draggable } from "react-beautiful-dnd";

const getItemStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? "darkblue" : "purple",
  padding: 'grid' * 2,
  

  // styles we need to apply on draggables
  ...draggableStyle
});

const Task = (props) => {
  debugger
return (
<Draggable draggableId={props.id} index={props.index}>
{(provided, snapshot) => (
<div 
{...provided.dragHandleProps}
{...provided.draggableProps}
ref={provided.innerRef}
isDragging={snapshot.isDragging}
style={getItemStyle(
  snapshot.isDragging,
  provided.draggableProps.style)}
className={`${s.main} ${props.done ? s.done: ''}`}><TaskImportance importance={props.importance} /> {props.task}
</div>
)}
</Draggable>
)}
// this compoent takes care  of the incoming props and generate necesary color.
const TaskImportance = (props) => {
    const TaskColor = {
        display: 'inline-block',
        backgroundColor: `hsl(${props.importance*10}, 100%, 50%)`,
        'border-radius': '50%',
        width:'10px',
        height: '10px'

      }
    return <div style={TaskColor} ></div>
}
export default Task

//{`banner ${active ? "active" : ""}`}

//className={`${s.main} ${props.done ? s.done: ''}`}
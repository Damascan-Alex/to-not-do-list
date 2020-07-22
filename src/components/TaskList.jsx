//Task list render all task including those for next day

import React from "react";
import Task from "./task/task";
import s from "./taskList.module.css";

const TaskList = (props) => {
  return (
    <div>
      <div className={s.taskList}>
        {props.taskDivs.todayTasks.map((tsk) => (
          <Task task={tsk.task} />
        ))}
      </div>

      <div className={s.tomarowLand}>
        <hr />
        <h5>Tomarowland</h5>
      </div>
    </div>
  );
};

export default TaskList;
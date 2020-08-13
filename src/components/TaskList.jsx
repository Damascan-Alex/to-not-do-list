//Task list render all task including those for next day

import React from "react";
import Task from "./task/Task";
import AddTaskReduxForm from "./NewTask";

const TaskList = (props) => {
  return (
    <div>
      <div>
        <div>
          {props.taskDivs.todayTasks.map((tsk) => (
            <Task
              editTask={props.editTask}
              task={tsk.task}
              done={tsk.done}
              importance={tsk.importance}
              editImportance={props.editImportance}
              id={tsk.id}
              handleDelete={props.deleteTask}
              handleDone={props.doneTask}
            />
          ))}
        </div>
        <AddTaskReduxForm
          onSubmit={(values) => {
            debugger;
            props.createNewTask(values.addNewTask, values.taskImportance);
          }}
        />{" "}
      </div>

      <div>
        <hr />
        <h5>Tomarowland</h5>
      </div>
    </div>
  );
};

export default TaskList;

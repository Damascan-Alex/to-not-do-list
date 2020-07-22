import React, { memo } from "react";
import s from "./App.module.css";
import Task from "./components/task/task";
import NewTask from "./components/newTask/newTask";

class App extends React.Component {
  state = {
    todayTasks: [
      { task: "To make cofe", id: 354, importance: "1", done: false},
      { task: "To cook brekfast", id: 89, importance: "4", done: false},
      { task: "Prepare for work", id: 79, importance: "3", done: false },
      { task: "Start the work", id: 79, importance: "3", done: false },
      { task: "Make initial template", id: 79, importance: "3", done: true },
      { task: "Add new task functionality", id: 79, importance: "3", done: false },
      { task: "Mark task as done and not done ", id: 79, importance: "3", done: false },
    ],
    tomarowTask: [],
    procastinationIndex: 45,
  };

  render() {
    return (
      <div className={s.main}>
        <div className={s.top}>
          <h1>TO NOT DO LIST</h1>
          <p>Procastination level {this.state.procastinationIndex}</p>
        </div>

        <div className={s.taskList}>
          {this.state.todayTasks.map((tsk) => (
            <Task task={tsk.task} />
          ))}
        <NewTask />  
        </div>

        <div className={s.tomarowLand}>
          <hr />
          <h5>Tomarowland</h5>
        </div>
      </div>
    );
  }
}

export default App;

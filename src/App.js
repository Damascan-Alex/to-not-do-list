import React, { memo } from "react";
import s from "./App.module.css";
import TaskList from "./components/TaskList";
import TaskListContainer from "./components/TaskListContainer";



class App extends React.Component {
  state = {
   
    procastinationIndex: 45,
  };

  render() {
    return (
      <div className={s.main}>
        <div className={s.top}>
          <h1>TO NOT DO LIST</h1>
          <p>Procastination level {this.state.procastinationIndex}</p>
        </div>
        <TaskListContainer />              
      </div>
    );
  }
}

export default App;

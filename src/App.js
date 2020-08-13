import React, { memo } from "react";
import TaskListContainer from "./components/TaskListContainer";
import DragDropContainer from "./components/DragDropContainer";

class App extends React.Component {
  state = {
    procastinationIndex: 45,
  };

  render() {
    return (
      <div className='container text-light bg-dark'>
        <div className='text-center'>
          <h1>TO NOT DO LIST</h1>
          <p>Procastination level {this.state.procastinationIndex}</p>
        </div>
        <TaskListContainer />
        <DragDropContainer />
      </div>
    );
  }
}

export default App;

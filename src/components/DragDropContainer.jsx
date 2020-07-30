import { connect } from "react-redux";
import DragAndDrop from "./DragDrop";



let mapStateToProps = (state) => {
    return {
      taskDivs: state.taskDivs,
    };
  };

  
  export default connect(mapStateToProps, {})(DragAndDrop);
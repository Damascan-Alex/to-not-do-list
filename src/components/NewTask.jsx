import React from "react";
import { reduxForm, Field } from "redux-form";
import ImportanceRange from "./ImportanceRange";


const AddTaskForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          //className={s.edit}
          component="input"
          name="addNewTask"
          placeholder="Add new task bro"
        />
        <Field  /*  this solution seems to work, but have to link values from Importancerange to field 2 */
          component='input'
          name='taskImportance' /* Field 2 */
          placeholder='Range task importance'
        />
        <ImportanceRange />  {/* the values from this component should go in field 2 */}
        <button type="submit">Add</button>
     
      </div>
    </form>
  );
};

const AddTaskReduxForm = reduxForm({ form: "taskForm" })(AddTaskForm);

export default AddTaskReduxForm;

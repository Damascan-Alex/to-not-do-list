import React from "react";
import { reduxForm, Field } from "redux-form";


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
        <button type="submit">Add</button>
     
      </div>
    </form>
  );
};

const AddTaskReduxForm = reduxForm({ form: "taskForm" })(AddTaskForm);

export default AddTaskReduxForm;

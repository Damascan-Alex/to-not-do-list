import React from "react";
import { reduxForm, Field } from "redux-form";
import ImportanceRange from "./ImportanceRange";

const AddTaskForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          //className={s.edit}
          component='input'
          name='addNewTask'
          placeholder='Add new task bro'
        />
        <Field component={ImportanceRange} name='taskImportance' />
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

const AddTaskReduxForm = reduxForm({ form: "taskForm" })(AddTaskForm);

export default AddTaskReduxForm;

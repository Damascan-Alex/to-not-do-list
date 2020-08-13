import React from "react";
import { reduxForm, Field } from "redux-form";
import ImportanceRange from "./ImportanceRange";
const AddTaskForm = ({ handleSubmit }) => {
  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='row justify-content-between'>
        <Field
          className='col-8'
          component='input'
          name='addNewTask'
          placeholder='Add new task bro'
        />
        <Field
          component={ImportanceRange}
          name='taskImportance'
          className='col'
        />
        <button
          className=' btn btn-warning align-self-end button p-3'
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  );
};

const AddTaskReduxForm = reduxForm({ form: "taskForm" })(AddTaskForm);

export default AddTaskReduxForm;

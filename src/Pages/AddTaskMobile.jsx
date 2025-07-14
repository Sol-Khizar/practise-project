import React from "react";
import AddTaskmobileComponent from "../Components/AddTaskmobile";

const AddTaskMobile = ({ AddTodos, form, setForm }) => {
  return (
    <div>
      <AddTaskmobileComponent
        AddTodos={AddTodos}
        form={form}
        setForm={setForm}
      />
    </div>
  );
};

export default AddTaskMobile;

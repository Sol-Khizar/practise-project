import React from "react";
import TaskComponet from "../Components/Task";

const Tasks = ({
  todos,
  handleComplete,
  updateTodo,
  deleteTodo,
  searchQuery,
}) => {
  return (
    <div>
      <TaskComponet
        todos={todos}
        handleComplete={handleComplete}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Tasks;

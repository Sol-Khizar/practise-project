import React from "react";
import HomeComponent from "../Components/Home";

const Home = ({
  Todos,
  handleComplete,
  updateTodo,
  deleteTodo,
  searchQuery,
}) => {
  return (
    <div>
      <HomeComponent
        Todos={Todos}
        handleComplete={handleComplete}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Home;

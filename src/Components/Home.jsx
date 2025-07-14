import React from "react";
import Todo from "./Todo";

const Home = ({
  Todos,
  handleComplete,
  updateTodo,
  deleteTodo,
  searchQuery,
}) => {
  const lsdata = localStorage.getItem("data");

  const data = JSON.parse(lsdata);

  const filteredTodos =
    searchQuery.trim() === ""
      ? Todos
      : Todos.filter((todo) =>
          todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <>
      <div className=" mx-16">
        <p className="text-3xl ">
          Hello {data.firstName} {data.lastName},
        </p>
        <p className="text-[#d1d1d1] text-sm">
          Let's get started keeping your task organised
        </p>
      </div>

      <div className="w-full xl:w-4/5 mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-5">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              title={todo.title}
              task={todo.desc}
              date={todo.date}
              priority={todo.priority}
              handleComplete={handleComplete}
              id={todo.id}
              completed={todo.completed}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400 text-lg">
            No todos found matching your search.
          </p>
        )}
      </div>
    </>
  );
};

export default Home;

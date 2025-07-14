import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Todo from "./Todo";

const Task = ({
  todos,
  handleComplete,
  updateTodo,
  deleteTodo,
  searchQuery,
}) => {
  const filteredTodos =
    searchQuery.trim() === ""
      ? todos
      : todos.filter((todo) =>
          todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
  return (
    <div className=" xl:w-4/5  w-full mx-auto  px-5">
      <Tabs selectedTabClassName=" border-blue-600 text-blue-600 underline ">
        <TabList className="flex gap-x-3 justify-center  ">
          <Tab className="py-2 px-1 cursor-pointer outline-none border-none text-yellow-500 hover:text-yellow-600 ">
            All Task
          </Tab>
          <Tab className="py-2 px-1 cursor-pointer outline-none border-none text-yellow-500 hover:text-yellow-600 ">
            Pending
          </Tab>
          <Tab className="py-2 px-1 cursor-pointer outline-none border-none text-yellow-500 hover:text-yellow-600 ">
            Completed
          </Tab>
          <Tab className="py-2 px-1 cursor-pointer outline-none border-none text-yellow-500 hover:text-yellow-600 ">
            High Priority Task
          </Tab>
          <Tab className="py-2 px-1 cursor-pointer outline-none border-none text-yellow-500 hover:text-yellow-600 ">
            low Priority Task
          </Tab>
        </TabList>

        <TabPanel className="py-2">
          <div className="">
            <div className=" w-full  mx-auto  mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
              {filteredTodos &&
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
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">
            <div className="md:w-4/5 w-full mx-auto  mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {filteredTodos &&
                filteredTodos
                  .filter((todo) => !todo.completed)
                  .map((todo) => (
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
                  ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">
            <div className="md:w-4/5 w-full mx-auto  mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {filteredTodos &&
                filteredTodos
                  .filter((todo) => todo.completed)
                  .map((todo) => (
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
                  ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">
            <div className="md:w-4/5 w-full mx-auto  mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {filteredTodos &&
                filteredTodos
                  .filter((todo) => todo.priority)
                  .map((todo) => (
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
                  ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4">
            <div className="md:w-4/5 w-full mx-auto  mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {filteredTodos &&
                filteredTodos
                  .filter((todo) => !todo.priority)
                  .map((todo) => (
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
                  ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Task;

// utils/todos.js

export const getTodosForUser = (username) => {
  const allTodos = JSON.parse(localStorage.getItem("todos")) || {};
 
  return allTodos[username] || [];
};

export const saveTodoForUser = (username, newTodo) => {
  const allTodos = JSON.parse(localStorage.getItem("todos")) || {};
  const userTodos = allTodos[username] || [];
  
  
  allTodos[username] = [...userTodos, newTodo];
 
  
  localStorage.setItem("todos", JSON.stringify(allTodos));

  
};

export const deleteTodoForUser = (username, todoId) => {
  const allTodos = JSON.parse(localStorage.getItem("todos")) || {};
  const updated = (allTodos[username] || []).filter(todo => todo.id !== todoId);

  allTodos[username] = updated;
  localStorage.setItem("todos", JSON.stringify(allTodos));
};

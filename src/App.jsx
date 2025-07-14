// import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/Home";
// import AddTodo from "./Components/TodoProject/AddTodo";
import LoginPage from "./Pages/Login";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import Navbar from "./Components/Navbar";
import ProfilePage from "./Pages/Profile";
import TasksPages from "./Pages/Tasks";
import Footer from "./Components/Footer";
import AddTaskmobilePage from "./Pages/AddTaskMobile";
import ScrollToTop from "./Components/ScrollTop";
import { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { getTodosForUser, deleteTodoForUser } from "./utils/todos";
import PageNotFoundPage from "./Pages/PageNotFoundPage";

function App() {
  const location = useLocation();
  const knownRoutes = ["/", "/profile", "/tasks", "/Add-Tasks"];
  const shouldShowNavbar = knownRoutes.includes(location.pathname);

  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({
    title: "",
    desc: "",
    date: "",
    priority: false,
    completed: false,
  });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : null;
  });

  useEffect(() => {
    if (user?.username) {
      const userTodos = getTodosForUser(user?.username);

      setTodos(userTodos);
      setHasLoaded(true);
    }
  }, [user?.username]);

  useEffect(() => {
    if (user?.username && hasLoaded) {
      const allTodos = JSON.parse(localStorage.getItem("todos")) || {};
      allTodos[user.username] = todos;
      localStorage.setItem("todos", JSON.stringify(allTodos));
    }
  }, [todos, user?.username, hasLoaded]);

  const AddTodos = () => {
    const addTodo = {
      id: Date.now(),
      title: form.title,
      desc: form.desc,
      date: form.date,
      priority: form.priority,
      completed: false,
    };

    if (form.title && form.desc && form.date) {
      setTodos((prev) => [...prev, addTodo]);
      setForm({
        title: "",
        desc: "",
        date: "",
        priority: false,
      });
      navigate("/");
    }
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    deleteTodoForUser(user.username, id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedData) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedData } : todo))
    );
  };

  return (
    <>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen ">
        <div className="flex-shrink-0">
          {shouldShowNavbar && (
            <Navbar
              AddTodos={AddTodos}
              form={form}
              setForm={setForm}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}
        </div>

        <div className="flex-grow bg-[#f6f6f6] py-20">
          <Routes>
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage
                    Todos={todos}
                    handleComplete={handleComplete}
                    updateTodo={editTodo}
                    deleteTodo={deleteTodo}
                    searchQuery={searchQuery}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <TasksPages
                    todos={todos}
                    handleComplete={handleComplete}
                    updateTodo={editTodo}
                    deleteTodo={deleteTodo}
                    searchQuery={searchQuery}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Add-Tasks"
              element={
                <ProtectedRoute>
                  <AddTaskmobilePage
                    AddTodos={AddTodos}
                    form={form}
                    setForm={setForm}
                  />
                </ProtectedRoute>
              }
            />

            <Route path="/*" element={<PageNotFoundPage />} />
          </Routes>
        </div>

        <div className="flex-shrink-0"> {shouldShowNavbar && <Footer />}</div>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";
import EditTodoModal from "./components/EditTodoModal";
import DeleteTodoModal from "./components/DeleteTodoModal";
import Notification from "./components/Notification";

const API_URL = "https://todo-endpoint.onrender.com/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [activeTodo, setActiveTodo] = useState(null);
  const [notification, setNotification] = useState(null);
  const [filter, setFilter] = useState("All");

  /* THEME */
  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* FETCH TODOS */
  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  /* ADD */
  const addTodo = async (todo) => {
    window.notify("Adding task...", "loading");

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });

    setShowAdd(false);
    window.notify("Task added successfully", "success");
    fetchTodos();
  };

  /* EDIT */
  const editTodo = async (id, data) => {
    window.notify("Updating task...", "loading");

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setShowEdit(false);
    window.notify("Task updated", "success");
    fetchTodos();
  };

  /* DELETE */
  const deleteTodo = async () => {
    window.notify("Deleting task", "loading");

    await fetch(`${API_URL}/${activeTodo.id}`, { method: "DELETE" });

    setShowDelete(false);
    window.notify("Task deleted", "success");
    fetchTodos();
  };

  /* COMPLETE */
  const toggleComplete = async (todo) => {
    await fetch(`${API_URL}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  };

  /* CLEAR COMPLETED */
  const clearCompleted = async () => {
    const completed = todos.filter((t) => t.completed);
    for (let t of completed) {
      await fetch(`${API_URL}/${t.id}`, { method: "DELETE" });
    }
    fetchTodos();
  };

  /* FILTER */
  const filteredTodos = todos.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  return (
    <>
      <Notification />
      <Header
        theme={theme}
        toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        openAdd={() => setShowAdd(true)}
      />

      <TodoList
        todos={filteredTodos}
        filter={filter}
        setFilter={setFilter}
        onEdit={(todo) => {
          setActiveTodo(todo);
          setShowEdit(true);
        }}
        onDelete={(todo) => {
          setActiveTodo(todo);
          setShowDelete(true);
        }}
        onToggle={toggleComplete}
        clearCompleted={clearCompleted}
      />

      {showAdd && (
        <AddTodoModal onAdd={addTodo} onClose={() => setShowAdd(false)} />
      )}
      {showEdit && (
        <EditTodoModal
          todo={activeTodo}
          onSave={editTodo}
          onClose={() => setShowEdit(false)}
        />
      )}
      {showDelete && (
        <DeleteTodoModal
          onConfirm={deleteTodo}
          onClose={() => setShowDelete(false)}
        />
      )}

      {notification && (
        <Notification {...notification} onClose={() => setNotification(null)} />
      )}
    </>
  );
};

export default App;

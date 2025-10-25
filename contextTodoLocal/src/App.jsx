import { useState, useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // prev=previous
    // ...todo means to add new todo to todos list and ...prev means existing todos
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    // id to get the eaxact todos and todo to update it
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    // prev.filter to filter and check is there the exact id or not
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    // first access the value and then use map to go for each value then check if id is same and then chnage the value if needed
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      try {
        const todos = JSON.parse(stored);
        if (Array.isArray(todos) && todos.length > 0) {
          setTodos(todos);
        }
      } catch (e) {
        // If parsing fails, ignore and start with empty list
        // Optionally clear the bad value to avoid repeated errors
        console.error("Failed to parse todos from localStorage:", e);
      }
    }
  }, []);

  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

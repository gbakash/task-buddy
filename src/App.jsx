import { useEffect, useState } from "react";
import ProgressTracker from "./Components/ProgressTracker";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // ✅ Load tasks from localStorage when app loads
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // ✅ Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks"); // ✅ also clear from storage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">TaskBuddy</h1>
      <p className="text-gray-700 mb-6">Your Friendly Task Manager</p>

      <TaskForm addTask={addTask} />

      <div className="w-full max-w-xl mt-6">
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>

      <div className="w-full max-w-xl mt-6">
        <ProgressTracker tasks={tasks} />
      </div>

      <button
        onClick={clearTasks}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Clear All Tasks
      </button>
    </div>
  );
}

export default App;

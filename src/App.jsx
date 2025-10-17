import { useEffect, useState } from "react";
import ProgressTracker from "./Components/ProgressTracker";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import "./Style.css";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };
  return (
    <div>
      <h1>TaskBuddy</h1>
      <p>Our Friendly TaskManager</p>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
      <button>Clear all tasks</button>
    </div>
  );
}

export default App;

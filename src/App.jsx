import { useEffect, useState } from "react";
import ProgressTracker from "./Components/ProgressTracker";
import TaksList from "./Components/TaksList";
import TaskForm from "./Components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div>
      <h1>TaskBuddy</h1>
      <p>Our Friendly TaskManager</p>
      <TaskForm addTask={addTask} />
      <TaksList />
      <ProgressTracker />
    </div>
  );
}

export default App;

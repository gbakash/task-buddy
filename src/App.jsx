import ProgressTracker from "./Components/ProgressTracker";
import TaksList from "./Components/TaksList";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <div>
      <h1>TaskBuddy</h1>
      <p>Our Friendly TaskManager</p>
      <TaskForm />
      <TaksList />
      <ProgressTracker />
    </div>
  );
}

export default App;

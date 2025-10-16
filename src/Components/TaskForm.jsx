import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, category, completed: false });

    //reset
    setTask('');
    setPriority('');
    setCategory('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter the task to add"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button type="submit">Add Task</button>
        <h1>
          {task} {priority} {category}
        </h1>
      </div>

      <div>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  );
}

export default TaskForm;

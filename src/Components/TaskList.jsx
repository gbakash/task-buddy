import React, { useState } from "react";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const toggleComplete = (task, index) => {
    updateTask({ ...task, completed: !task.completed }, index);
  };

  const startEditing = (task, index) => {
    setEditingIndex(index);
    setEditedText(task.text);
  };

  const saveEdit = (index) => {
    if (!editedText.trim()) return;
    const task = tasks[index];
    updateTask({ ...task, text: editedText }, index);
    setEditingIndex(null);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-400";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "work":
        return "bg-blue-200 text-blue-800";
      case "personal":
        return "bg-pink-200 text-pink-800";
      case "general":
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet!</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`flex items-center justify-between bg-white shadow-md p-3 rounded-lg transition hover:shadow-lg ${
            task.completed ? "opacity-70 line-through" : ""
          }`}
        >
          {/* Serial Number */}
          <span className="text-gray-500 font-semibold w-8 text-center">
            {index + 1}.
          </span>

          {/* Task Text + Priority + Category (side-by-side) */}
          <div className="flex items-center flex-1 gap-3 ml-2">
            {editingIndex === index ? (
              <div className="flex gap-2 flex-1">
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={() => saveEdit(index)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingIndex(null)}
                  className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-800 font-medium">{task.text}</p>
                <span
                  className={`text-white px-2 py-0.5 rounded-full text-xs ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(
                    task.category
                  )}`}
                >
                  {task.category}
                </span>
              </>
            )}
          </div>

          {/* Buttons */}
          {editingIndex !== index && (
            <div className="flex gap-2 ml-3">
              <button
                onClick={() => toggleComplete(task, index)}
                className={`px-3 py-1 rounded-lg text-white text-sm ${
                  task.completed
                    ? "bg-gray-400"
                    : "bg-green-500 hover:bg-green-600"
                } transition`}
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => startEditing(task, index)}
                className="px-3 py-1 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

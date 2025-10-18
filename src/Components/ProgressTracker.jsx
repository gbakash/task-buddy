export default function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <p className="text-gray-700 mb-2">
        {completedTasks} of {totalTasks} tasks completed
      </p>
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className="h-4 bg-green-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

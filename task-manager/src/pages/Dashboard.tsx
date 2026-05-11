import { Link } from "react-router-dom";
import { useTaskContext } from "../context/useTaskContext";
import { TaskCard } from "../components/TaskCard";

export const Dashboard = () => {
  const { tasks } = useTaskContext();

  return (
    <div>
      <h1>Task Dashboard</h1>

      <Link to="/tasks/create">
        <button>Create New Task</button>
      </Link>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};
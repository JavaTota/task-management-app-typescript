import { useParams, Link } from "react-router-dom";
import { useTaskContext } from "../context/useTaskContext";

export const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useTaskContext();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h1>{task.title}</h1>

      <p>
        <strong>Description:</strong> {task.description}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Due Date:</strong> {task.dueDate}
      </p>

      <p>
        <strong>Created At:</strong>{" "}
        {new Date(task.createdAt).toLocaleString()}
      </p>

      <Link to={`/tasks/${task.id}/edit`}>
        <button>Edit Task</button>
      </Link>
    </div>
  );
};
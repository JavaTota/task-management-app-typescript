import { Link } from "react-router-dom";
import type { Task } from "../types/task";
import { useTaskContext } from "../context/useTaskContext";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { deleteTask } = useTaskContext();

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due: {task.dueDate}</p>

      <div>
        <Link to={`/tasks/${task.id}`}>View</Link>
        {" | "}
        <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
        {" | "}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};
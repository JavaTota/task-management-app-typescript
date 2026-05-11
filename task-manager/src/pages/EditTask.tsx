import { useNavigate, useParams } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { useTaskContext } from "../context/useTaskContext";
import type { Task } from "../types/task";

export const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return <h2>Task not found</h2>;
  }

  const handleUpdateTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    navigate("/");
  };

  return (
    <div>
      <TaskForm
        initialData={task}
        onSubmit={handleUpdateTask}
      />
    </div>
  );
};
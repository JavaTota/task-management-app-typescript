import { useNavigate } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { useTaskContext } from "../context/useTaskContext";
import type { Task } from "../types/task";

export const CreateTask = () => {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const handleCreateTask = (task: Task) => {
    addTask(task);
    navigate("/");
  };

  return (
    <div>
      <TaskForm onSubmit={handleCreateTask} />
    </div>
  );
};
import { useState } from "react";
import type { Task, TaskStatus } from "../types/task";

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (task: Task) => void;
}

export const TaskForm = ({
  initialData,
  onSubmit,
}: TaskFormProps) => {
  const [title, setTitle] = useState<string>(
    initialData?.title || ""
  );

  const [description, setDescription] = useState<string>(
    initialData?.description || ""
  );

  const [status, setStatus] = useState<TaskStatus>(
    initialData?.status || "todo"
  );

  const [dueDate, setDueDate] = useState<string>(
    initialData?.dueDate || ""
  );

  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const task: Task = {
      id: initialData?.id || crypto.randomUUID(),
      title,
      description,
      status,
      dueDate,
      createdAt: initialData?.createdAt || new Date().toISOString(),
    };

    onSubmit(task);

    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Task" : "Create Task"}</h2>

      {error && <p>{error}</p>}

      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Status</label>
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as TaskStatus)
          }
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <button type="submit">
        {initialData ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
};
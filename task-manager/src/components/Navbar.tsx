import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link to="/">Dashboard</Link>

      <Link to="/tasks/create">Create Task</Link>

      <Link to="/login">Login</Link>
    </nav>
  );
};
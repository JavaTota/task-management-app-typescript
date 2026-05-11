import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";

import { Dashboard } from "./pages/Dashboard";
import { TaskDetails } from "./pages/TaskDetails";
import { CreateTask } from "./pages/CreateTask";
import { EditTask } from "./pages/EditTask";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/tasks/create"
          element={<CreateTask />}
        />

        <Route
          path="/tasks/:id"
          element={<TaskDetails />}
        />

        <Route
          path="/tasks/:id/edit"
          element={<EditTask />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
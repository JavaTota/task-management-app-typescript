import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks/create"
          element={
            <ProtectedRoute>
              <CreateTask />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks/:id"
          element={
            <ProtectedRoute>
              <TaskDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks/:id/edit"
          element={
            <ProtectedRoute>
              <EditTask />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
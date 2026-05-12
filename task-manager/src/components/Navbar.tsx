import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return (
    <nav>
      {isAuthenticated && (
        <>
          <Link to="/">Dashboard</Link>
          <Link to="/tasks/create">Create Task</Link>
        </>
      )}

      {!isAuthenticated ? (
        <>
          <button onClick={() => loginWithRedirect()}>Login</button>

          <button
            onClick={() =>
              loginWithRedirect({
                authorizationParams: {
                  screen_hint: "signup",
                },
              })
            }
          >
            Register
          </button>
        </>
      ) : (
        <>
          <span>{user?.name}</span>

          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};
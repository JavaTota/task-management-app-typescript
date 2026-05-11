import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } =
    useAuth0();

  return (
    <div>
      <h1>Login Page</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>
          Log In
        </button>
      ) : (
        <div>
          <h2>Welcome {user?.name}</h2>

          {user?.picture && (
            <img
              src={user.picture}
              alt={user.name}
              width={100}
            />
          )}

          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
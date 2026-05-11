import { useAuth0 } from "@auth0/auth0-react";

export const Register = () => {
  const { loginWithRedirect } = useAuth0();

  const handleRegister = async () => {
    await loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <div>
      <h1>Register</h1>

      <p>Create a new account using Auth0.</p>

      <button onClick={handleRegister}>
        Sign Up
      </button>
    </div>
  );
};
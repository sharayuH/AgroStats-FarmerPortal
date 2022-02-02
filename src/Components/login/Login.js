import React, { useState } from "react";
import LoginForm from "../login/LoginForm";

function Login() {
  const adminUser = {
    email: "omkarjd1212@gmail.com",
    password: "123"
  };
  const [user, setUser] = useState({ login: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({ name: details.name, email: details.email });
    } else {
      setError("Login do not match!");
    }
  };

  return (
    <div className="Login">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button
            onClick={() => {
              setUser({ name: "", email: "" });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
export default Login;

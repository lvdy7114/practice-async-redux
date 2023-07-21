import React from "react";
import { login, logout } from "../features/user";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ email: "linda.vady@gmail.com", password: "password123" })
          );
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Login;

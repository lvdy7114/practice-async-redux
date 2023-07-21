import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1>Welcome</h1>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Profile;

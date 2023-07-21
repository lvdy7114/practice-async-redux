import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { darkMode, lightMode } from "../features/theme";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="theme-buttons">
        <button
          onClick={() => {
            dispatch(darkMode());
          }}
        >
          dark
        </button>
        <button
          onClick={() => {
            dispatch(lightMode());
          }}
        >
          light
        </button>
      </div>
    </div>
  );
}

export default NavBar


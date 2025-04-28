// pages/HomePage.js
import React, { useContext } from "react";
import { StateContext } from "../contexts/StateContect";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { state, UpdateState } = useContext(StateContext);
  return (
    <div>
      <h1>Home Page</h1>
      <p>Current State:{state}</p>
      <button
        onClick={() => {
          UpdateState("this my new state from home");
        }}
      >
        Update State
      </button>
      <Link to="/about">About</Link>
    </div>
  );
};

export default HomePage;

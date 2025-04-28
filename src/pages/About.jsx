// pages/AboutPage.js
import React, { useContext } from "react";
import { StateContext } from "../contexts/StateContect";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const { state, UpdateState } = useContext(StateContext);
  return (
    <div>
      <h1>About Page</h1>
      <p>Current State: {state}</p>
      <button
        onClick={() => {
          UpdateState("this my new state from about");
        }}
      >
        Update State
      </button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AboutPage;

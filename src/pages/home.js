import React from "react";
import rocketman from "../images/rocketman.png";
import "../stylesheets/home.css";

export default function Home() {
  return (
    <div className="home-page-container">
      <h1 className="greeting-message">Welcome Rocketeer!</h1>
      <div className="home-buttons-container">
        <button
          className="start-button"
          onClick={() => {
            window.open("/personal-info", "_self");
          }}
        >
          Start Questionarrie
        </button>
        <a href="/submitted-forms">Submitted applications</a>
      </div>
      <img src={rocketman} className="rocketman-img" alt="Rocketman" />
    </div>
  );
}

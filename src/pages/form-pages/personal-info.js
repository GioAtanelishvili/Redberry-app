import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import RightPanel from "../../components/RightPanel";
import "../../stylesheets/form-pages.css";

const PAGE = 1;

export default function PersonalInfo() {
  return (
    <div className="form-page-container">
      <section className="left-panel">
        <h1 className="header">Hey, Rocketeer, what are your coordinates?</h1>
        <NavBar page={PAGE}/>
      </section>
      <section className="right-panel">
        <RightPanel page={PAGE - 1} />
      </section>
    </div>
  );
}

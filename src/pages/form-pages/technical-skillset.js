import React from "react";
import RightPanel from "../../components/RightPanel";
import Form from "../../components/form-components/Form";
import NavBar from "../../components/nav-bar/NavBar";
import "../../stylesheets/form-pages.css";

const PAGE = 2;

export default function TechnicalSkillset() {
  return (
    <div className="form-page-container">
      <section className="left-panel">
        <h1 className="header">Tell us about your skills</h1>
        <Form page={PAGE} />
        <NavBar page={PAGE} />
      </section>
      <section className="right-panel">
        <RightPanel page={PAGE - 1} />
      </section>
    </div>
  );
}

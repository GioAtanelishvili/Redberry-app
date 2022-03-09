import React from "react";
import RightPanel from "../../components/RightPanel";
import "../../stylesheets/form-pages.css";

const PAGE = 2;

export default function TechnicalSkillset() {
  return (
    <div className="form-page-container">
      <section className="left-panel">
        <h1 className="header">Tell us about your skills</h1>
      </section>
      <section className="right-panel">
        <RightPanel page={PAGE - 1} />
      </section>
    </div>
  );
}

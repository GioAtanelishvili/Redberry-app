import React, {useState} from "react";
import RightPanel from "../../components/RightPanel";
import Form from "../../components/form-components/Form";
import NavBar from "../../components/nav-bar/NavBar";
import "../../stylesheets/form-pages.css";

const PAGE = 1;

export default function PersonalInfo() {
  const [isValidated, setIsValidated] = useState(false);
  const [displayErrors, setDisplayErrors] = useState(false);
  return (
    <div className="form-page-container">
      <section className="left-panel">
        <h1 className="header">Hey, Rocketeer, what are your coordinates?</h1>
        <Form
          page={PAGE}
          setIsValidated={setIsValidated}
          displayErrors={displayErrors}
        />
        <NavBar
          page={PAGE}
          isValidated={isValidated}
          setDisplayErrors={setDisplayErrors}
        />
      </section>
      <section className="right-panel">
        <RightPanel page={PAGE - 1} />
      </section>
    </div>
  );
}

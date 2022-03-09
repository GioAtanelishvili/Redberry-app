import React, { useEffect, useState } from "react";
import INITIAL_FORM_DATA from "../../additional-data/initial-form-data";
import CovidForm from "./CovidForm";
import InsightsForm from "./InsightsForm";
import PersonalInfoForm from "./PersonalInfoForm";
import SkillsetForm from "./SkillsetForm";
import SubmitForm from "./SubmitForm";
import "./form.css";

export default function Form({ page, setIsValidated, displayErrors }) {
  const [formToDisplay, setFormToDisplay] = useState();
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("form_data")) || INITIAL_FORM_DATA
  );

  //   Create and update local storage
  useEffect(() => {
    localStorage.setItem("form_data", JSON.stringify(formData, undefined, 2));
  }, [formData]);

  //   Choose form to display
  useEffect(() => {
    switch (page) {
      case 1:
        setFormToDisplay(
          <PersonalInfoForm
            {...formData}
            handleChange={handleChange}
            setIsValidated={setIsValidated}
            displayErrors={displayErrors}
          />
        );
        break;
      case 2:
        setFormToDisplay(
          <SkillsetForm
            {...formData}
            handleChange={handleChange}
            setIsValidated={setIsValidated}
            displayErrors={displayErrors}
          />
        );
        break;
      case 3:
        setFormToDisplay(
          <CovidForm
            {...formData}
            handleChange={handleChange}
            setIsValidated={setIsValidated}
            displayErrors={displayErrors}
          />
        );
        break;
      case 4:
        setFormToDisplay(
          <InsightsForm
            {...formData}
            handleChange={handleChange}
            setIsValidated={setIsValidated}
            displayErrors={displayErrors}
          />
        );
        break;
      case 5:
        setFormToDisplay(
          <SubmitForm formData={formData} handleSubmit={handleSubmit} />
        );
        break;
      default:
        setFormToDisplay();
    }
  }, [formData, displayErrors]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    fetch(
      "https://bootcamp-2022.devtest.ge/api/application",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.status)
      .then((status) => {
        if (status === 201) {
          window.open("/thanks-message", "_self");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="form-container">
      <form>{formToDisplay}</form>
    </section>
  );
}

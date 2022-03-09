import React, { useEffect, useState } from "react";
import INITIAL_FORM_DATA from "../../additional-data/initial-form-data";
import CovidForm from "./CovidForm";
import InsightsForm from "./InsightsForm";
import PersonalInfoForm from "./PersonalInfoForm";
import SkillsetForm from "./SkillsetForm";
import SubmitForm from "./SubmitForm";

export default function Form({ page }) {
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
        setFormToDisplay(<PersonalInfoForm {...formData} />);
        break;
      case 2:
        setFormToDisplay(<SkillsetForm {...formData} />);
        break;
      case 3:
        setFormToDisplay(<CovidForm {...formData} />);
        break;
      case 4:
        setFormToDisplay(<InsightsForm {...formData} />);
        break;
      case 5:
        setFormToDisplay(<SubmitForm {...formData} />);
        break;
      default:
        setFormToDisplay();
    }
  }, [formData]);

  return (
    <section className="form-container">
      <form>{formToDisplay}</form>
    </section>
  );
}

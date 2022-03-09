import React, { useEffect, useState } from "react";
import SkillsetDataWidget from "../SkillsetDataWidget";

const INITIAL_SKILLS_DATA = {
  id: "",
  language: "",
  experience: "",
};

export default function SkillsetForm(props) {
  const [formError, setFormError] = useState({});
  // API received list
  const [skillsList, setSkillsList] = useState([]);
  // user input
  const [skillsData, setSkillsData] = useState(INITIAL_SKILLS_DATA);

  const [modalData, setModalData] = useState(
    JSON.parse(localStorage.getItem("modal_data")) || []
  );

  function validateSkillset() {
    const errors = {};

    if (modalData.length === 0) {
      errors.zeroSkillSellected = "* should choose at least one skill";
    }

    setFormError({ ...errors });
    return errors;
  }

  useEffect(() => {
    if (Object.keys(validateSkillset()).length === 0) {
      props.setIsValidated(true);
      setFormError();
    } else {
      props.setIsValidated(false);
    }
  }, [modalData]);

  // localStorage for skills data
  useEffect(() => {
    localStorage.setItem("skills_data", JSON.stringify(skillsData));
  }, [skillsData]);

  // Local storage for ExperienceModal
  useEffect(() => {
    localStorage.setItem("modal_data", JSON.stringify(modalData));
  }, [modalData]);

  //fetch data
  useEffect(() => {
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((resp) => resp.json())
      .then((data) => setSkillsList(data));
  }, []);

  
  function validate() {
    if (skillsData.id && skillsData.experience && Number(skillsData.experience)) {
      if (modalData[modalData.length - 1]?.id !== skillsData.id) {
        return true;
      }
    }
  }

  // delete button function
  function handleDeletion(e) {
    e.preventDefault();
    setModalData(
      modalData.filter((value) => {
        return value.id.toString() !== e.target.alt.toString();
      })
    );
  }

  return (
    <React.Fragment>
      <section>
        <select
          name="skills"
          onChange={(e) => {
            setSkillsData({
              ...skillsData,
              id: e.target.value,
              language: skillsList[e.target.value - 1].title,
            });
          }}
        >
          <option value="" disabled selected hidden>
            Skills
          </option>
          {skillsList?.map((skill) => {
            return (
              <option key={skill?.id} value={skill?.id}>
                {skill?.title}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          value={skillsData.experience}
          onChange={(e) => {
            setSkillsData({ ...skillsData, experience: e.target.value });
          }}
          placeholder="Experience Duration in Years"
        />
        <button
          className="handle-add-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (validate()) {
              setModalData([...modalData, { ...skillsData }]);
              setSkillsData(INITIAL_SKILLS_DATA);
            }
          }}
        >
          Add Programming Language
        </button>
        {modalData.map((skill) => {
          return (
            <SkillsetDataWidget
              key={skill.id}
              {...skill}
              handleDeletion={handleDeletion}
            />
          );
        })}
        {props.displayErrors && (
          <p className="error-message">{formError?.zeroSkillSellected}</p>
        )}
      </section>
    </React.Fragment>
  );
}

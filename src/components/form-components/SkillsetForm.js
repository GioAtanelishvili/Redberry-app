import React, { useEffect, useState } from "react";
import SkillsetDataWidget from "../SkillsetDataWidget";

const INITIAL_SINGLE_SKILL = {
  id: "",
  language: "",
  experience: "",
};

export default function SkillsetForm(props) {
  const [fetchedSkillset, setFetchedSkillset] = useState([]);
  const [singleSkill, setSingleSkill] = useState(INITIAL_SINGLE_SKILL);
  const [skillsetData, setSkillsetData] = useState(
    JSON.parse(localStorage.getItem("skillset_data")) || []
  );

  //   Fetch skillset from API
  useEffect(() => {
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((resp) => resp.json())
      .then((data) => setFetchedSkillset(data));
  }, []);

  //   Create local storage for skillset data
  useEffect(() => {
    localStorage.setItem("skillset_data", JSON.stringify(skillsetData));
  }, [skillsetData]);

  //   Create local storage for single skill
  useEffect(() => {
    localStorage.setItem("skills_data", JSON.stringify(singleSkill));
  }, [singleSkill]);

  // Handle widget remove button
  function handleRemove(e) {
    e.preventDefault();
    setSkillsetData(
      skillsetData.filter((value) => {
        return value.id.toString() !== e.target.alt.toString();
      })
    );
  }

  return (
    <section>
      <select
        name="skills"
        onChange={(e) => {
          setSingleSkill({
            ...singleSkill,
            id: e.target.value,
            language: fetchedSkillset[e.target.value - 1].title,
          });
        }}
      >
        <option value="" disabled selected hidden>
          Skills
        </option>
        {fetchedSkillset.map((skill) => {
          return (
            <option key={skill?.id} value={skill?.id}>
              {skill?.title}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={singleSkill.experience}
        onChange={(e) => {
          setSingleSkill({ ...singleSkill, experience: e.target.value });
        }}
        placeholder="Experience Duration in Years"
      />
      <button
        className="handle-add-button"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setSkillsetData([...skillsetData, { ...singleSkill }]);
          setSingleSkill(INITIAL_SINGLE_SKILL);
        }}
      >
        Add Programming Language
      </button>
      {skillsetData.map((skill) => {
        return (
          <SkillsetDataWidget
            key={skill.id}
            {...skill}
            handleRemove={handleRemove}
          />
        );
      })}
    </section>
  );
}

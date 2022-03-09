import React, { useEffect, useRef, useState } from "react";

const INITIAL_SINGLE_SKILL = {
  id: "",
  language: "",
  experience: "",
};

export default function SkillsetForm(props) {
  const [fetchedSkillset, setFetchedSkillset] = useState([]);
  const [singleSkill, setSingleSkill] = useState(INITIAL_SINGLE_SKILL);
  const [skillsetData, setSkillsetData] = useState([]);

  const singleSkillContainer = useRef(null);
  const experienceContainer = useRef(null);

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

  return (
    <section>
      <select
        name="skills"
        onChange={(e) => {
          setSingleSkill({
            id: e.target.value,
            language: fetchedSkillset[e.target.value - 1].title,
          });
        }}
        ref={singleSkillContainer}
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
        ref={experienceContainer}
      />
      <button className="handle-add-button" type="submit">
        Add Programming Language
      </button>
    </section>
  );
}

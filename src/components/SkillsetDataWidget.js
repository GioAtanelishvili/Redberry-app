import React from "react";
import removeButton from "../images/remove.png";
import "./skillset-data-widget.css";

export default function SkillsetDataWidget({
  id,
  language,
  experience,
  handleRemove,
}) {
  return (
    <article className="skillset-widget">
      <p className="widget-title">{language}</p>
      <p>Years of Experience: {experience}</p>
      <button>
        <img src={removeButton} alt={id} onClick={handleRemove} />
      </button>
    </article>
  );
}

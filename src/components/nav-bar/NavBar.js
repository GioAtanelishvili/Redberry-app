import React from "react";
import "./nav-bar.css";
import navButton from "../../images/navButton.png";
import prevButton from "../../images/previous.png";
import nextButton from "../../images/next.png";
import INITIAL_FORM_DATA from "../../additional-data/initial-form-data";

const PAGES = [
  "/",
  "/personal-info",
  "/technical-skillset",
  "/covid",
  "/redberrian-insights",
  "/submit",
];

export default function NavBar({ page, isValidated, setDisplayErrors }) {
  function addFormDataSkills() {
    const formData = JSON.parse(localStorage.getItem("form_data"));
    const modalData = JSON.parse(localStorage.getItem("modal_data"));
    modalData.map((skill) => {
      delete skill.language;
      return skill;
    });
    formData.skills = modalData;
    localStorage.setItem("form_data", JSON.stringify(formData, undefined, 2));
  }

  return (
    <nav className="nav-bar">
      <ul>
        {/* Prev button */}
        <li>
          <button className="prev-button">
            <img
              src={prevButton}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                window.open(PAGES[page - 1], "_self");
                if (page === 1) {
                  localStorage.setItem(
                    "form_data",
                    JSON.stringify(INITIAL_FORM_DATA)
                  );
                  localStorage.setItem("modal_data", JSON.stringify([]));
                }
              }}
            />
          </button>
        </li>
        {/* 1st button */}
        <li>
          <button
            className="nav-button"
            style={page >= 1 ? { opacity: "1" } : {}}
          >
            <img
              src={navButton}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                window.open(PAGES[1], "_self");
              }}
            />
          </button>
        </li>
        {/* 2nd button */}
        <li>
          <button
            className="nav-button"
            style={page >= 2 ? { opacity: "1" } : {}}
          >
            <img
              src={navButton}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                if (page === 1) {
                  setDisplayErrors(true);
                }
                if ((isValidated && page === 1) || page > 2) {
                  window.open(PAGES[2], "_self");
                }
              }}
            />
          </button>
        </li>
        {/* 3rd button */}
        <li>
          <button
            className="nav-button"
            style={page >= 3 ? { opacity: "1" } : {}}
          >
            <img
              src={navButton}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                if (page === 2) {
                  setDisplayErrors(true);
                }
                if (isValidated && page === 2) {
                  addFormDataSkills();
                }
                if ((isValidated && page === 2) || page > 3) {
                  window.open(PAGES[3], "_self");
                }
              }}
            />
          </button>
        </li>
        {/* 4th button */}
        <li>
          <button
            className="nav-button"
            style={page >= 4 ? { opacity: "1" } : {}}
          >
            <img
              src={navButton}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                if (page === 3) {
                  setDisplayErrors(true);
                }
                if ((isValidated && page === 3) || page > 4) {
                  window.open(PAGES[4], "_self");
                }
              }}
            />
          </button>
        </li>
        {/* 5th button */}
        <li>
          <button
            className="nav-button"
            style={page >= 5 ? { opacity: "1" } : {}}
          >
            <img
              src={navButton}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                if (page === 4) {
                  setDisplayErrors(true);
                }
                if (isValidated && page === 4) {
                  window.open(PAGES[5], "_self");
                }
              }}
            />
          </button>
        </li>
        {/* Next button */}
        <li>
          <button className="next-button">
            <img
              src={nextButton}
              alt=""
              onClick={() => {
                setDisplayErrors(true);
                if (isValidated) {
                  window.open(PAGES[page + 1], "_self");
                }
                if (isValidated && page === 2) {
                  addFormDataSkills();
                }
              }}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

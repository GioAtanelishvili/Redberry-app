import React from "react";
import "./nav-bar.css";
import navButton from "../../images/navButton.png";
import prevButton from "../../images/previous.png";
import nextButton from "../../images/next.png";

const PAGES = [
  "/",
  "/personal-info",
  "/technical-skillset",
  "/covid",
  "/redberrian-insights",
  "/submit",
];

export default function NavBar({ page }) {
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
                window.open(PAGES[page - 1], "-self");
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
                window.open(PAGES[1], "-self");
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
                window.open(PAGES[2], "-self");
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
                window.open(PAGES[3], "-self");
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
                window.open(PAGES[4], "-self");
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
                window.open(PAGES[5], "-self");
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
              onClick={(e) => {
                e.preventDefault();
                window.open(PAGES[page + 1], "-self");
              }}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

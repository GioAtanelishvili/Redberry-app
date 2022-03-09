import React, { useEffect, useState } from "react";
import "../stylesheets/submitted-forms.css";
import arrow from "../images/dropdown.png";

export default function SubmittedForms() {
  const [submittedForms, setSubmittedForms] = useState([]);

  useEffect(() => {
    fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=1d6acdb4-6e0f-490e-aec8-3213a2c7abeb"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setSubmittedForms(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="submitted-forms-container">
      <h1 className="header">Submitted Applications</h1>
      {submittedForms.map((value, index) => {
        return <SingleFormHead key={index} value={value} index={index + 1} />;
      })}
    </div>
  );
}

function SingleFormHead(props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <section className="single-form-head">
        <h4 style={{ color: "#fff" }}>{props.index}</h4>
        <img
          src={arrow}
          alt=""
          style={showInfo ? { transform: "rotate(180deg)" } : {}}
          onClick={() => {
            setShowInfo((prev) => !prev);
          }}
        />
      </section>
      {showInfo && <SingleFormBody {...props.value} />}
    </>
  );
}

function SingleFormBody(props) {
  const { submittedForms } = props;
  const skillData = [
    "HTML",
    "CSS",
    "PHP",
    "Laravel",
    "React.JS",
    "Vue.JS",
    "Svelte",
  ];

  return (
    <section className="single-form-body">
      <section
        className="personal-info"
        style={{ gridColumnStart: "1", gridColumnEnd: "2" }}
      >
        <h3>personal information</h3>
        <div style={{ display: "flex" }}>
          <div className="keys">
            <p>First Name</p>
            <p>Last Name</p>
            <p>E-mail</p>
            <p>Phone</p>
          </div>
          <div className="values">
            <p>{props.first_name}</p>
            <p>{props.last_name}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
          </div>
        </div>
      </section>
      <section className="skillset" style={{ gridColumnStart: "2" }}>
        <h3>Skillset</h3>
        <div style={{ display: "flex" }}>
          <div className="keys">
            {props.skills.map((value) => {
              return <p>{skillData[value.id]}</p>;
            })}
          </div>
          <div className="values">
            {props.skills.map((value) => {
              return <p>{value.experience}</p>;
            })}
          </div>
        </div>
      </section>
      <section className="covid" style={{ gridColumnStart: "1" }}>
        <h3>Covid situation</h3>
        <br />
        <p className="question">How would you prefer to work?</p>
        <div>
          {["from_sairme_office", "from_home", "hybrid"].map((value) => {
            if (value === props.work_preference) {
              return (
                <div>
                  <input type="radio" disabled checked />
                  <p style={{ display: "inline" }}>{value}</p>
                </div>
              );
            } else {
              return (
                <div>
                  <input type="radio" disabled />
                  <p style={{ display: "inline" }}>{value}</p>
                </div>
              );
            }
          })}
        </div>
        <br />
        <p className="question">Did you have covid 19?</p>
        <div>
          {[true, false].map((value) => {
            if (value === props.had_covid) {
              return (
                <div>
                  <input type="radio" disabled checked />
                  <p style={{ display: "inline" }}>Yes</p>
                </div>
              );
            } else {
              return (
                <div>
                  <input type="radio" disabled />
                  <p style={{ display: "inline" }}>No</p>
                </div>
              );
            }
          })}
        </div>
        <br />
        <p className="question">Have you been vaccinated?</p>
        <input type="date" value={props.had_covid_at} className="date-box" />
        <br />
        <p className="question">Have you been vaccinated?</p>
        <div>
          {[true, false].map((value) => {
            if (value === props.vaccinated) {
              return (
                <div>
                  <input type="radio" disabled checked />
                  <p style={{ display: "inline" }}>Yes</p>
                </div>
              );
            } else {
              return (
                <div>
                  <input type="radio" disabled />
                  <p style={{ display: "inline" }}>No</p>
                </div>
              );
            }
          })}
        </div>
        <br />
        <p>When did you get covid vaccine?</p>
        <input type="date" value={props.vaccinated_at} className="date-box" />
      </section>
      <section className="insights">
        <h3>Insights</h3>
        <p className="question">
          Would you attend Devtalks and maybe also organize your own?
        </p>
        <div>
          {[true, false].map((value) => {
            if (value === props.will_organize_devtalk) {
              return (
                <div>
                  <input type="radio" disabled checked />
                  <p style={{ display: "inline" }}>Yes</p>
                </div>
              );
            } else {
              return (
                <div>
                  <input type="radio" disabled />
                  <p style={{ display: "inline" }}>No</p>
                </div>
              );
            }
          })}
        </div>
        <p>What would you speak about at Devtalk?</p>
        <div className="text">{props.devtalk_topic}</div>
        <br />
        <p>Tell us somthing special</p>
        <div className="text">{props.something_special}</div>
      </section>
    </section>
  );
}

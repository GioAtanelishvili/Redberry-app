import React, { useEffect, useRef, useState } from "react";

export default function CovidForm(props) {
  const {
    work_preference,
    had_covid,
    had_covid_at,
    vaccinated,
    vaccinated_at,
  } = props;

  const [formError, setFormError] = useState({});

  const [displayCovidDate, setDisplayCovidDate] = useState(false);
  const [displayVaccinationDate, setdisplayVaccinationDate] = useState(false);

  const workPrefContainer1 = useRef(null);
  const workPrefContainer2 = useRef(null);
  const workPrefContainer3 = useRef(null);
  const hadCovidContainer1 = useRef(null);
  const hadCovidContainer2 = useRef(null);
  const covidDateContainer = useRef(had_covid_at);
  const vaccinationContainer1 = useRef(null);
  const vaccinationContainer2 = useRef(null);
  const vaccinationDateContainer = useRef(vaccinated_at);

  // for saving data after refreshing
  useEffect(() => {
    if (work_preference === workPrefContainer1.current?.value) {
      workPrefContainer1.current.checked = true;
    } else if (work_preference === workPrefContainer2.current?.value) {
      workPrefContainer2.current.checked = true;
    } else if (work_preference === workPrefContainer3.current?.value) {
      workPrefContainer3.current.checked = true;
    }

    if (had_covid === hadCovidContainer1.current?.value) {
      hadCovidContainer1.current.checked = true;
      setDisplayCovidDate(true);
    } else if (had_covid === hadCovidContainer2.current?.value) {
      hadCovidContainer2.current.checked = true;
      setDisplayCovidDate(false);
    }

    if (vaccinated === vaccinationContainer1.current?.value) {
      vaccinationContainer1.current.checked = true;
      setdisplayVaccinationDate(true);
    } else if (vaccinated === vaccinationContainer2.current?.value) {
      vaccinationContainer2.current.checked = true;
      setdisplayVaccinationDate(false);
    }
  }, [had_covid, vaccinated, work_preference]);

  function validateCovid() {
    const errors = {};

    if (
      !workPrefContainer1.current.checked &&
      !workPrefContainer2.current.checked &&
      !workPrefContainer3.current.checked
    ) {
      errors.workPreference = "* please, select one of the options";
    }

    if (
      !hadCovidContainer1.current.checked &&
      !hadCovidContainer2.current.checked
    ) {
      errors.hadCovid = "* please, select one of the options";
    } else if (
      hadCovidContainer1.current.checked &&
      covidDateContainer.current?.value === ""
    ) {
      errors.hadCovidAt = "* this field is required";
    }

    if (
      !vaccinationContainer1.current.checked &&
      !vaccinationContainer2.current.checked
    ) {
      errors.vaccinated = "* please, select one of the options";
    } else if (
      vaccinationContainer1.current.checked &&
      vaccinationDateContainer.current?.value === ""
    ) {
      errors.vaccinatedAt = "* this field is required";
    }
    setFormError({ ...errors });
    return errors;
  }

  useEffect(() => {
    if (Object.keys(validateCovid()).length === 0) {
      props.setIsValidated(true);
      setFormError();
    } else {
      props.setIsValidated(false);
    }
  }, [props]);

  return (
    <section className="covid-form">
      <div>
        <p>how would you prefer to work?</p>
        <input
          type="radio"
          name="work_preference"
          id="sairmeOffice"
          value="from_sairme_office"
          onClick={props.handleChange}
          ref={workPrefContainer1}
        />
        <label htmlFor="sairmeOffice">From Sairme Office</label>

        <input
          type="radio"
          name="work_preference"
          id="home"
          value="from_home"
          onClick={props.handleChange}
          ref={workPrefContainer2}
        />
        <label htmlFor="home">From Home</label>
        <br />
        <input
          type="radio"
          name="work_preference"
          id="hybrid"
          value="hybrid"
          onClick={props.handleChange}
          ref={workPrefContainer3}
        />
        <label htmlFor="hybrid">Hybrid</label>
        <br />
        {props.displayErrors && (
          <p className="error-message">{formError?.workPreference}</p>
        )}
      </div>
      <div>
        <p>Did you contact covid 19? :(</p>
        <input
          type="radio"
          name="had_covid"
          id="true"
          value={true}
          ref={hadCovidContainer1}
          onClick={props.handleChange}
        />
        <label htmlFor="true">Yes</label>
        <br />
        <input
          type="radio"
          name="had_covid"
          id="false"
          value={false}
          ref={hadCovidContainer2}
          onClick={props.handleChange}
        />
        <label htmlFor="false">No</label>
        <br />
        {props.displayErrors && (
          <p className="error-message">{formError?.hadCovid}</p>
        )}
        <div
          style={displayCovidDate ? { display: "block" } : { display: "none" }}
        >
          <p>When?</p>
          <input
            type="date"
            name="had_covid_at"
            value={had_covid_at}
            onChange={props.handleChange}
            ref={covidDateContainer}
          />
          {props.displayErrors && (
            <p className="error-message">{formError?.hadCovidAt}</p>
          )}
        </div>
      </div>
      <div>
        <p>Have you been vaccinated?</p>
        <input
          type="radio"
          name="vaccinated"
          id="true"
          value={true}
          onClick={props.handleChange}
          ref={vaccinationContainer1}
        />
        <label htmlFor="true">Yes</label>
        <br />
        <input
          type="radio"
          name="vaccinated"
          id="false"
          value={false}
          onClick={props.handleChange}
          ref={vaccinationContainer2}
        />
        <label htmlFor="false">No</label>
        {props.displayErrors && (
          <p className="error-message">{formError?.vaccinated}</p>
        )}
        <div
          style={
            displayVaccinationDate ? { display: "block" } : { display: "none" }
          }
        >
          <p>When?</p>
          <input
            type="date"
            name="vaccinated_at"
            value={vaccinated_at}
            onChange={props.handleChange}
            ref={vaccinationDateContainer}
          />

          {props.displayErrors && (
            <p className="error-message">{formError?.vaccinatedAt}</p>
          )}
        </div>
      </div>
    </section>
  );
}

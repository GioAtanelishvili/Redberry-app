import React from "react";

export default function CovidForm(props) {
  const {
    work_preference,
    had_covid,
    had_covid_at,
    vaccinated,
    vaccinated_at,
  } = props;

  return (
    <section className="covid-form-container">
      <div>
        <p>how would you prefer to work?</p>
        <input
          type="radio"
          name="work_preference"
          id="sairmeOffice"
          value="from_sairme_office"
          onClick={props.handleChange}
        />
        <label htmlFor="sairmeOffice">From Sairme Office</label>
        <br />
        <input
          type="radio"
          name="work_preference"
          id="home"
          value="from_home"
          onClick={props.handleChange}
        />
        <label htmlFor="home">From Home</label>
        <br />
        <input
          type="radio"
          name="work_preference"
          id="hybrid"
          value="hybrid"
          onClick={props.handleChange}
        />
        <label htmlFor="hybrid">Hybrid</label>
        <br />
      </div>
      <div>
        <p>Did you contact covid 19? :(</p>
        <input
          type="radio"
          name="had_covid"
          id="true"
          value={true}
          onClick={props.handleChange}
        />
        <label htmlFor="true">Yes</label>
        <br />
        <input
          type="radio"
          name="had_covid"
          id="false"
          value={false}
          onClick={props.handleChange}
        />
        <label htmlFor="false">No</label>
        <br />

        <div>
          <p>When?</p>
          <input
            type="date"
            name="had_covid_at"
            value={had_covid_at}
            onChange={props.handleChange}
          />
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
        />
        <label htmlFor="true">Yes</label>
        <br />
        <input
          type="radio"
          name="vaccinated"
          id="false"
          value={false}
          onClick={props.handleChange}
        />
        <label htmlFor="false">No</label>

        <div>
          <p>When?</p>
          <input
            type="date"
            name="vaccinated_at"
            value={vaccinated_at}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </section>
  );
}

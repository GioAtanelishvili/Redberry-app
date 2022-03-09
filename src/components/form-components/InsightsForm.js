import React from "react";

export default function InsightsForm(props) {
  const { will_organize_devtalk, devtalk_topic, something_special } = props;

  return (
    <section className="insights-form">
      <div>
        <p>Would you attend Devtalks and maybe also organize your own?</p>
        <input
          type="radio"
          name="will_organize_devtalk"
          id="true"
          value={true}
          onClick={props.handleChange}
        />
        <label htmlFor="true">Yes</label>
        <br />
        <input
          type="radio"
          name="will_organize_devtalk"
          id="false"
          value={false}
          onClick={props.handleChange}
        />
        <label htmlFor="false">No</label>
      </div>
      <div>
        <p>What would you speak about at Devtalk?</p>
        <textarea
          name="devtalk_topic"
          placeholder="I would..."
          value={devtalk_topic}
          onChange={props.handleChange}
        ></textarea>

        <p>Tell us something special</p>
        <textarea
          name="something_special"
          placeholder="I..."
          value={something_special}
          onChange={props.handleChange}
        ></textarea>
      </div>
    </section>
  );
}

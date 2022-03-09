import React, { useEffect, useRef, useState } from "react";

export default function InsightsForm(props) {
  const { will_organize_devtalk, devtalk_topic, something_special } = props;

  const [formError, setFormError] = useState({});

  const willOrganizeContainer1 = useRef(null);
  const willOrganizeContainer2 = useRef(null);
  const devtalkTopic = useRef(devtalk_topic);
  const somethingSpecial = useRef(something_special);

  // for saving data after refreshing
  useEffect(() => {
    if (will_organize_devtalk === willOrganizeContainer1.current?.value) {
      willOrganizeContainer1.current.checked = true;
    } else if (
      will_organize_devtalk === willOrganizeContainer2.current?.value
    ) {
      willOrganizeContainer2.current.checked = true;
    }
  }, [will_organize_devtalk]);

  function validateInsights() {
    const errors = {};

    if (
      !willOrganizeContainer1.current.checked &&
      !willOrganizeContainer2.current.checked
    ) {
      errors.willOrganizeDevtalk = "* please, select one of the options";
    }
    if (devtalkTopic.current?.value === "") {
      errors.devtalkTopic = "* this filed is required";
    }
    if (somethingSpecial.current?.value === "") {
      errors.somethingSpecial = "* this filed is required";
    }

    setFormError({ ...errors });
    return errors;
  }

  useEffect(() => {
    if (Object.keys(validateInsights()).length === 0) {
      props.setIsValidated(true)

      setFormError();
    } else {
      props.setIsValidated(false);
    }
  }, [props]);

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
          ref={willOrganizeContainer1}
        />
        <label htmlFor="true">Yes</label>
        <br />
        <input
          type="radio"
          name="will_organize_devtalk"
          id="false"
          value={false}
          onClick={props.handleChange}
          ref={willOrganizeContainer2}
        />
        <label htmlFor="false">No</label>
        {/* error */}
        {props.displayErrors && (
          <p className="error-message">{formError?.willOrganizeDevtalk}</p>
        )}
        {/* error */}
      </div>
      <div>
        <p>What would you speak about at Devtalk?</p>
        <textarea
          name="devtalk_topic"
          placeholder="I would..."
          value={devtalk_topic}
          onChange={props.handleChange}
          ref={devtalkTopic}
        ></textarea>
        {/* error */}
        {props.displayErrors && (
          <p className="error-message">{formError?.devtalkTopic}</p>
        )}
        {/* error */}
        <p>Tell us something special</p>
        <textarea
          name="something_special"
          placeholder="I..."
          value={something_special}
          onChange={props.handleChange}
          ref={somethingSpecial}
        ></textarea>
        {/* error */}
        {props.displayErrors && (
          <p className="error-message">{formError?.somethingSpecial}</p>
        )}
        {/* error */}
      </div>
    </section>
  );
}

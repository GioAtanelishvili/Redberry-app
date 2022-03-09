import React, { useRef, useState, useEffect } from "react";

export default function PersonalInfoForm(props) {
  const { first_name, last_name, email, phone } = props;

  const [formError, setFormError] = useState({});

  const firstNameContainer = useRef(first_name);
  const lastNameContainer = useRef(last_name);
  const emailContainer = useRef(email);
  const phoneContainer = useRef(phone);

  function validatePersonalInfo() {
    const errors = {};
    let emailRegexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!firstNameContainer.current.value) {
      errors.firstName = "* first name is required";
    } else if (firstNameContainer.current.value.length < 2) {
      errors.firstName = "* first name should include 2 or more characters";
    } else if (/[\d\W_]+/.test(firstNameContainer.current.value)) {
      errors.firstName = "* first name shoud include only letters";
    }

    if (!lastNameContainer.current.value) {
      errors.lastName = "* last name is required";
    } else if (lastNameContainer.current.value.length < 2) {
      errors.lastName = "* last name should include 2 or more characters";
    } else if (/[\d\W_]+/.test(lastNameContainer.current.value)) {
      errors.lastName = "* first name shoud include only letters";
    }

    if (!emailContainer.current.value) {
      errors.email = "* e-mail is required";
    } else if (!emailRegexp.test(emailContainer.current.value)) {
      errors.email = "* invalid format for e-mail adress";
    }

    if (
      phoneContainer.current.value &&
      !/^\+99555\d{7}/.test(phoneContainer.current.value)
    ) {
      errors.phone = "* invalid format for phone number";
    }

    setFormError({ ...errors });

    return errors;
  }

  useEffect(() => {
    if (Object.keys(validatePersonalInfo()).length === 0) {
      props.setIsValidated(true);
      setFormError();
    } else {
      props.setIsValidated(false);
    }
  }, [props]);

  return (
    <section>
      <input
        type="text"
        name="first_name"
        value={first_name}
        placeholder="First Name"
        onChange={(e) => {
          props.handleChange(e);
        }}
        ref={firstNameContainer}
        required
      />
      {props.displayErrors && (
        <p className="error-message">{formError?.firstName}</p>
      )}
      <input
        type="text"
        name="last_name"
        value={last_name}
        placeholder="Last Name"
        onChange={props.handleChange}
        ref={lastNameContainer}
        required
      />
      {props.displayErrors && (
        <p className="error-message">{formError?.lastName}</p>
      )}
      <input
        type="email"
        name="email"
        value={email}
        placeholder="E-Mail"
        onChange={props.handleChange}
        ref={emailContainer}
        required
      />
      {props.displayErrors && (
        <p className="error-message">{formError?.email}</p>
      )}
      <input
        type="tel"
        name="phone"
        value={phone}
        placeholder="+995 5__ __ __ __"
        onChange={props.handleChange}
        ref={phoneContainer}
      />
      {props.displayErrors && (
        <p className="error-message">{formError?.phone}</p>
      )}
    </section>
  );
}

import React, { useRef } from "react";

export default function PersonalInfoForm(props) {
  const { first_name, last_name, email, phone } = props;

  const firstNameContainer = useRef(null);
  const lastNameContainer = useRef(null);
  const emailContainer = useRef(null);
  const phoneContainer = useRef(null);

  return (
    <section>
      <input
        type="text"
        name="first_name"
        value={first_name}
        placeholder="First Name"
        onChange={props.handleChange}
        ref={firstNameContainer}
        required
      />
      <input
        type="text"
        name="last_name"
        value={last_name}
        placeholder="Last Name"
        onChange={props.handleChange}
        ref={lastNameContainer}
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="E-Mail"
        onChange={props.handleChange}
        ref={emailContainer}
        required
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        placeholder="+995 5__ __ __ __"
        onChange={props.handleChange}
        ref={phoneContainer}
      />
    </section>
  );
}

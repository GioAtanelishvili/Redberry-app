import React from "react";
import Form from "../../components/form-components/Form";
import "../../stylesheets/submit.css"

const PAGE = 5;

export default function Submit() {
  return (
    <div className="parent-container">
      <Form page={PAGE} />
    </div>
  );
}

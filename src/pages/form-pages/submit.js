import React from "react";
import Form from "../../components/form-components/Form";

const PAGE = 5;

export default function Submit() {
  return (
    <div className="parent-container">
      <Form page={PAGE} />
    </div>
  );
}

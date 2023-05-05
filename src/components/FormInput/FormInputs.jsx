import React from "react";
import "./styles.css";

const FormInputs = ({ label, placeholder, fieldReq, type, disabled }) => {
  return (
    <div className="form">
      <label className="label">
        {label}
        <span>*</span>
      </label>
      <input type={type} placeholder={placeholder} disabled={disabled} />
      {fieldReq && <p>This field is required.</p>}
    </div>
  );
};

export default FormInputs;

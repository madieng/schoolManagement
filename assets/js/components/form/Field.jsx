import React from "react";

const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  error = ""
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={"form-control" + (error ? " is-invalid" : "")}
        id={name}
        placeholder={placeholder || label}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">
        L'adresse email ou le mot de passe n'est pas correct.
      </div>
    </div>
  );
};

export default Field;

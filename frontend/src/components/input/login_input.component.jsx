import React from "react";
import "./input.styles.css";
export const LoginInput = ({
  type,
  name,
  placeholder,
  handleCredentialChange,
}) => {
  return (
    <div className="input_wrap">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleCredentialChange(e)}
      />
    </div>
  );
};

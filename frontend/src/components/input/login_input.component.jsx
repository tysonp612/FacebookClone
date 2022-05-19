import React from "react";
import { useField } from "formik";
import "./input.styles.css";
export const LoginInput = ({
  bottom,
  placeholder,
  handleCredentialChange,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div className="input_error">
          <div className="error">{meta.error}</div>
          {meta.touched && meta.error && (
            <div className="error_arrow_top"></div>
          )}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        onChange={(e) => handleCredentialChange(e)}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div className="input_error">
          <div className="error">{meta.error}</div>
          {meta.touched && meta.error && (
            <div className="error_arrow_bottom"></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i className="error_icon" style={{ top: `${!bottom && "61%"}` }}></i>
      )}
    </div>
  );
};

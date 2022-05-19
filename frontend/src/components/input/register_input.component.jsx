import React from "react";
import { useField } from "formik";
import "./input.styles.css";
import { useMediaQuery } from "react-responsive";
export const RegisterInput = ({
  bottom,
  placeholder,
  handleCredentialChange,
  ...props
}) => {
  const desktopView = useMediaQuery({
    query: "(min-width:850px)",
  });
  //field is the props, meta is the condition of the form
  const [field, meta] = useField(props);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            desktopView ? "input_error input_error_desktop" : "input_error"
          }
        >
          <div className="error">{meta.error}</div>
          <div
            className={desktopView ? "error_arrow_left" : "error_arrow_top"}
          ></div>
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        //use field insteaed of props
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        onChange={(e) => handleCredentialChange(e)}
        //need to spread field and props
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div
          className={
            desktopView ? "input_error input_error_desktop" : "input_error"
          }
        >
          <div className="error">{meta.error}</div>
          <div
            className={desktopView ? "error_arrow_left" : "error_arrow_bottom"}
          ></div>
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!bottom && !desktopView && "61%"}` }}
        ></i>
      )}
    </div>
  );
};

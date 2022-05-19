import React, { useState } from "react";
import { Formik, Form } from "formik";
import { RegisterInput } from "./../../input/register_input.component";
import * as Yup from "yup";
import "./register_form.styles.css";
export const RegisterFormComponent = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  });
  //NOTE
  const { bYear, bMonth, bDay } = user;
  const tempYear = new Date().getFullYear();
  const years = Array.from(new Array(108), (val, index) => tempYear - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);

  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon"></i>
          <span>Sign Up</span>
          <span>It's quick and easy</span>
        </div>
        <Formik
        //   initialValues={{
        //     firstName,
        //     surName,
        //     email,
        //   }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  onChange={handleRegisterChange}
                />
                <RegisterInput
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth
                  <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <select
                    name="bDay"
                    value={bDay}
                    onChange={(e) => handleRegisterChange(e)}
                  >
                    {days.map((day, i) => {
                      return <option key={i}>{day}</option>;
                    })}
                  </select>
                  <select
                    name="bMonth"
                    value={bMonth}
                    onChange={(e) => handleRegisterChange(e)}
                  >
                    {months.map((month, i) => {
                      return <option key={i}>{month}</option>;
                    })}
                  </select>
                  <select
                    name="bYear"
                    value={bYear}
                    onChange={(e) => handleRegisterChange(e)}
                  >
                    {years.map((year, i) => {
                      return <option key={i}>{year}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Gender <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="female">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor="custom">
                    Custom
                    <input
                      type="radio"
                      name="gender"
                      id="custom"
                      value="custom"
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
                <div className="reg_infos">
                  By clicking Sign Up, you agree to our{" "}
                  <span>Terms, Data Policy &nbsp;</span>
                  and <span>Cookie Policy.</span> You may receive SMS
                  notifications from us and can opt out at any time.
                </div>
                <div className="reg_btn_wrapper">
                  <button className="blue_btn open_signup">Sign Up</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

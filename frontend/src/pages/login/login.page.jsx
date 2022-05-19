import React, { useState } from "react";
import "./login.styles.css";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
//components
import { LoginInput } from "./../../components/input/login_input.component";
export const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;
  const handleCredentialChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("Must be a valid email")
      .max(100),
    password: Yup.string().required("Password is required").min(6),
  });
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="./../../icons/facebook.svg" alt="facebook icon" />
            <span>
              Facebook Clone helps you connect and share with the people in your
              life
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      handleCredentialChange={handleCredentialChange}
                      placeholder="Email address or Phone number"
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      handleCredentialChange={handleCredentialChange}
                      bottom={true}
                    />
                    <button type="submit" className="blue_btn">
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot" className="forgot_password">
                Forgotten Password ?
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a Page </b>
              for a celebrity, brand or business
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
};

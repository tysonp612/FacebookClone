import React, { useState } from "react";
import "./login.styles.css";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
//components
import { LoginInput } from "./../../components/input/login_input.component";
export const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleCredentialChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="./../../icons/facebook.svg" alt="facebook icon" />
            Facebook Clone helps you connect and share with the people in your
            life
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik>
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

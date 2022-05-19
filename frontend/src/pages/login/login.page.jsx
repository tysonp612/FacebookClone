import React from "react";

//components
import { FooterComponent } from "./../../components/footer/footer.component";
import { LoginFormComponent } from "./../../components/form/login/login_form.component";
import { RegisterFormComponent } from "./../../components/form/register/register_form.component";
export const LoginPage = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginFormComponent />
        <RegisterFormComponent />
        <FooterComponent />
      </div>
    </div>
  );
};

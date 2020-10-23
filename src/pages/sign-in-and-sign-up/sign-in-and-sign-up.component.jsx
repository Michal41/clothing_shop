import React from "react";
import SingIn from "../../components/sign-in/sing-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";
import "./sign-in-and-sign-up.styles.scss";


const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SingIn></SingIn>
    <SignUp/>
  </div>
)

export default SignInAndSignUpPage

import "./sign-up.styles.scss";

import React from 'react';

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.jsx";

import {auth, createUserProfileDocument } from "../../firebase/firebase.utils";


class SignUp extends React.Component{
  constructor(){
    super();
    this.state = {
      displayName:"",
      email:"",
      password:"",
      confirmPassword:""
    } 
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });   
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword }= this.state;


    if( password != confirmPassword ){
      alert("password and confirmPasword not match");
      return;
    }

    try{

      const { user } = await auth.createUserWithEmailAndPassword(email,password)
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
      });

    }catch (error){
      console.log(error);
    }



  }

  render(){
    const {displayName, email, password, confirmPassword }= this.state;
    return(
      <div className="sign-up">
        <h2 className="title"> I do not have an account </h2>
        <span>Sign Up with your email and passoword </span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display name"
            onChange={this.handleChange}
            required
          />
          
          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            onChange={this.handleChange}
            required
          />


          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="confirm password"
            onChange={this.handleChange}
            required
          />




          <CustomButton
            type="submit"
          >  
            Create account
          </CustomButton>
        </form>


      </div>
    )
  }

}



export default SignUp;
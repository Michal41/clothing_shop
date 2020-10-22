import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component.jsx"
import React from 'react';
import CustomButton from "../custom-button/custom-button.jsx"
import { signInWithGoogle } from "../../firebase/firebase.utils.js";


class SingIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: ""})
  }
  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({ [name]: value })
    
  }

  render () {
    return (
      <div className="sign-in">
        <h2> I already have an account </h2>
        <span> Sign in with your email and password </span>

        <form onSubmit = {this.handleSubmit}>
          <FormInput  
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            required 
            label="email"/>
          <FormInput  
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            required 
            label="password"/>
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form" > Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGogleSignIn value="Submit Form" > Sign in with google </CustomButton>
          </div>
        </form>

      </div>
    )
  }
}


export default SingIn;
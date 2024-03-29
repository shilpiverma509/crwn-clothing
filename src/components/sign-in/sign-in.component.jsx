import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle, signInWithTwitter}from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";


class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }

  handleChange=(event)=>{
    const {value,name}=event.target;
    this.setState({
      [name]:value
    })

  }
  handleSubmit=async (event)=>{
    event.preventDefault();
    const {email,password}= this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({
        email:"",
        password:""
      })
    }
    catch(error){
      console.log("Error",error);
    }
    
  }
  render(){
    return(
      <div className="sign-in"> 
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton name="submit" type="submit">
              SIGN IN
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {' '}
              Sign In With Google
              {' '}
            </CustomButton>
            {/*
              <CustomButton onClick={signInWithTwitter}>
                {' '}
                  Sign In With Twitter
                {' '}
              </CustomButton>
            */}
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn;
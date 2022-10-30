import React from 'react';
import "../styles/LoginForm.css";
import ComuteLogo from "../images/ComuteLogo.svg";

import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";
import { useState } from 'react';
import { EmailAuthCredential } from 'firebase/auth';



function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const {signIn} = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signIn(userEmail, userPassword);
      navigate("/home");

    }
    catch(e) {
      console.log(e.message);
    }

  }
  return (
    <div className = "login-form-area">
        <img id = "comute-logo" src= {ComuteLogo} alt="COMUTE LOGO" />

        <form id = "login-form">
            <input id = "email-field" class="form-control form-control-lg" type="email" placeholder="email" aria-label=".form-control-lg example" onChange = {(e) => setUserEmail(e.target.value)}/>
            <input id = "password-field" class="form-control form-control-lg" type="password" placeholder="password" aria-label=".form-control-lg example" onChange = {(e) => setUserPassword(e.target.value)}/>
            <Link to = "/home"><button id = "login-btn"type="button" onClick = {handleLogin}class="btn btn-success">log in</button></Link>
            <Link to = "/register"><p id = "register-text">New to Co-Mute? Join the family.</p></Link>
        </form>

    </div>
  )
}

export default LoginForm
import React from 'react';
import "../styles/LoginForm.css";

import {Link} from "react-router-dom";

import ComuteLogo from "../images/ComuteLogo.svg";

function LoginForm() {
  return (
    <div className = "login-form-area">
        <img id = "comute-logo" src= {ComuteLogo} alt="COMUTE LOGO" />

        <form id = "login-form"action="#">
            <input id = "email-field" class="form-control form-control-lg" type="text" placeholder="email" aria-label=".form-control-lg example"/>
            <input id = "password-field" class="form-control form-control-lg" type="text" placeholder="password" aria-label=".form-control-lg example"/>
            <Link to = "/home"><button id = "login-btn"type="button" class="btn btn-success">log in</button></Link>
            <Link to = "/register"><p id = "register-text">New to Co-Mute? Join the family.</p></Link>
        </form>

    </div>
  )
}

export default LoginForm
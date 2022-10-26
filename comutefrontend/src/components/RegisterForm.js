import React from 'react';
import "../styles/RegisterForm.css";

import {Link} from "react-router-dom";

import ComuteLogo from "../images/ComuteLogo.svg";

function RegisterForm() {
  return (
    <div className = "register-form-area">
        <img id = "comute-logo" src= {ComuteLogo} alt="COMUTE LOGO" />

        <h1 id = "register-heading">Join the family</h1>

        <form id = "register-form"action="#">
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="email" aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="password" aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="password" aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="password" aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="password" aria-label=".form-control-lg example"/>
            <button id = "login-btn"type="button" class="btn btn-success">create account</button>
            <Link to = "/"><p id = "register-text">Back to login</p></Link>
        </form>

    </div>
  )
}

export default RegisterForm;
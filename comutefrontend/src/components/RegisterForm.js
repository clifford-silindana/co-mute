import React, { useState } from 'react';
import "../styles/RegisterForm.css";

import {Link} from "react-router-dom";

import ComuteLogo from "../images/ComuteLogo.svg";

function RegisterForm() {

    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [vehicleDescription, setVehicleDescription] = useState("");
    const [vehicleRegistration, setVehicleRegistration] = useState("");
    const[loading, setLoading] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        let url = " http://localhost:8001/users";
        let dataToPost = {"name" : userName, "surname" : userSurname, "phone" : userPhone, "email" : userEmail, "password": userPassword, "vehicleDescription" : vehicleDescription, "vehicleRegistration" : vehicleRegistration  };
        let options = {method : "POST", body : JSON.stringify(dataToPost), headers : {"Content-Type" : "application/json"}};

        fetch(url, options)
        .then((response) => {return response.json()})
        .then((data) => {
            console.log(data.status);
            setLoading(false)})
        .catch((error) => console.log(error.message))
        
    }

  return (
    <div className = "register-form-area">
        <img id = "comute-logo" src= {ComuteLogo} alt="COMUTE LOGO" />

        <h1 id = "register-heading">Join the family</h1>

        <form id = "register-form">
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="name" onChange = {(e) => setUserName(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="surname" onChange = {(e) => setUserSurname(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="phone" onChange = {(e) => setUserPhone(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="email" onChange = {(e) => setUserEmail(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="password" onChange = {(e) => setUserPassword(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="vehicle description (if applicable)" onChange = {(e) => setVehicleDescription(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="vehicle registration (if applicable)" onChange = {(e) => setVehicleRegistration(e.target.value)} aria-label=".form-control-lg example"/>
            <button id = "login-btn"type="submit" onSubmit = {handleSubmit}class="btn btn-success">create account</button>
            <Link to = "/"><p id = "register-text">Back to login</p></Link>
        </form>

    </div>
  )
}

export default RegisterForm;
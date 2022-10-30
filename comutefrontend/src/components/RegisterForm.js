import React, { useState } from 'react';
import "../styles/RegisterForm.css";
import ComuteLogo from "../images/ComuteLogo.svg";
import {Link, useNavigate } from "react-router-dom";


import { createUserWithEmailAndPassword } from 'firebase/auth';
import {UserAuth} from "../context/AuthContext";

function RegisterForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [vehicleDescription, setVehicleDescription] = useState("");
    const [vehicleRegistration, setVehicleRegistration] = useState("");
    const[loading, setLoading] = useState(true);

    //changed to async function
    function handleSubmit(e) {

        e.preventDefault();
        

        try {
            createUser(userEmail, userPassword).then((response) => console.log(response));
            
        }

        catch(e) {
            setError(e.message);
            console.log(e.message);
        }

        

        let url = "https://localhost:7212/api/Users";
        let dataToPost = {"name" : userName, "surname" : userSurname, "phone" : userPhone, "email" : userEmail, "password": userPassword, "vehicleDescription" : vehicleDescription, "vehicleRegistration" : vehicleRegistration  };
        let options = {method : "POST", body : JSON.stringify(dataToPost), headers : {"Content-Type" : "application/json"}};

        fetch(url, options)
        .then((response) => {return response.json()})
        .then((data) => {
            console.log(data.status);
            setLoading(false)})
        .catch((error) => console.log(error.message))

        navigate("/home");

        
        
    }

  return (
    <div className = "register-form-area">
        <img id = "comute-logo" src= {ComuteLogo} alt="COMUTE LOGO" />

        <h1 id = "register-heading">Join the family</h1>

        <form id = "register-form" onSubmit = {handleSubmit}>
            <input class="form-control form-control-lg" type="text" placeholder="name" onChange = {(e) => setUserName(e.target.value)} aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="surname" onChange = {(e) => setUserSurname(e.target.value)} aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="phone" onChange = {(e) => setUserPhone(e.target.value)} aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="email" placeholder="email" onChange = {(e) => setUserEmail(e.target.value)} aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="password" placeholder="password" onChange = {(e) => setUserPassword(e.target.value)} aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="vehicle description (if applicable)" onChange = {(e) => setVehicleDescription(e.target.value)} aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="vehicle registration (if applicable)" onChange = {(e) => setVehicleRegistration(e.target.value)} aria-label=".form-control-lg example"/>
            <button id = "login-btn"type="submit" class="btn btn-success">create account</button>
            <Link to = "/"><p id = "register-text">Back to login</p></Link>
        </form>

    </div>
  )
}

export default RegisterForm;
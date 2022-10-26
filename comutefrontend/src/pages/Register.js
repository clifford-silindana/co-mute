import React from 'react';
import "../styles/Register.css";

//media imports
import registervideo from "../videos/registervideo.mp4";

//component imports
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <div className = "login-page">
        <video autoPlay loop muted id = "login-video">
            <source src = {registervideo} type = "video/mp4"/>
        </video>

        <RegisterForm />
    </div>
  )
}

export default Register;
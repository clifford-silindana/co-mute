import React from 'react';
import "../styles/Login.css";

//media imports
import commutevideo from "../videos/commute2.mp4";

//component imports
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className = "login-page">
        <video autoPlay loop muted id = "login-video">
            <source src = {commutevideo} type = "video/mp4"/>
        </video>

        <LoginForm />
    </div>
  )
}

export default Login
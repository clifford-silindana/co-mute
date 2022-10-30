import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import ComuteLogo from "../images/ComuteLogo.svg";
import profilesvg from "../images/user.png";
import logoutsvg from "../images/shutdown.png";
import "../styles/Navigation.css";

import {UserAuth} from "../context/AuthContext";

function Navigation() {
    let placeholderUserId = 1;

    const {logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logout();

        navigate("/");
        console.log("You are logged out");


      }
      catch(e) {
        console.log(e.message);
      }
    }

  return (
    <div className = "navigation">
        <Link to = "/home"><img id = "comute-logo" src={ComuteLogo} alt="COMUTE LOGO" /></Link>

        <ul className = "navigation-links">
            <li className = "link-item"><Link className = "nav-link" to = "/createcarpool">create carpool</Link></li>
            <li className = "link-item"><Link className = "nav-link" to = "/allcarpools">all carpools</Link></li>
            <li className = "link-item"><Link className = "nav-link" to = "/mycarpools">my carpools</Link></li>
            <li className = "link-item"><Link className = "nav-link" to = {"/myprofile/" + placeholderUserId}><img className = "nav-image" src={profilesvg} alt="profile icon" /></Link></li>
            <li className = "link-item"><img onClick = {handleLogout} className = "nav-image" src = {logoutsvg} alt = "logout icon"/></li>
            

        </ul>

    </div>
  )
}

export default Navigation
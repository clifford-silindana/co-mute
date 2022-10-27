import React from 'react';
import "../styles/CreateCarpool.css";
import createcarpoolimg from "../images/createcarpool3.jpg";
import Navigation from '../components/Navigation';
import CarpoolForm from '../components/CarpoolForm';


function CreateCarpool() {
  return (
    <div>
        <Navigation />
        <h1 className = "page-heading">Create A New Carpool</h1>
        <div className = "content-area">
            <div className = "picture-area"><img className = "content-image"src = {createcarpoolimg} alt = "friends driving in car"/> </div>
            <div className = "form-area"><CarpoolForm /></div>
        </div>
    </div>
  )
}

export default CreateCarpool
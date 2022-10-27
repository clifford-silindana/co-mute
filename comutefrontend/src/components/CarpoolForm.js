import React, { useState } from 'react';
import "../styles/CarpoolForm.css";

import {Link} from "react-router-dom";

import ComuteLogo from "../images/ComuteLogo.svg";

function CarpoolForm() {

    const [departureTime, setDepartureTime] = useState("");
    const [expectedArrivalTime, setExpectedArrivalTime] = useState("");
    const [origin, setOrigin] = useState("");
    const [daysAvailable, setDaysAvailable] = useState("");
    const [destination, setDestination] = useState("");
    const [availableSeats, setAvailableSeats] = useState("");
    const [owner, setOwner] = useState("");
    const [specialNotes, setSpecialNotes] = useState("");
    const[loading, setLoading] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        let url = "http://localhost:8000/carpools";
        let dataToPost = {"departureTime" : departureTime, "expectedArrivalTime" : expectedArrivalTime, "origin" : origin, "daysAvailable" : daysAvailable, "destination": destination, "availableSeats" : availableSeats, "owner" : owner, "specialNotes" : specialNotes };
        let options = {method : "POST", body : JSON.stringify(dataToPost), headers : {"Content-Type" : "application/json"}};

        fetch(url, options)
        .then((response) => {return response.json()})
        .then((data) => {
            console.log(data.status);
            setLoading(false)})
        .catch((error) => console.log(error.message))
        
    }

  return (
    <div className = "carpool-form-area">
        <form id = "carpool-form"action="#">
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="departure time" onChange = {(e) => setDepartureTime(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="expected arrival time" onChange = {(e) => setExpectedArrivalTime(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="origin" onChange = {(e) => setOrigin(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="days available" onChange = {(e) => setDaysAvailable(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="destination" onChange = {(e) => setDestination(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="available seats" onChange = {(e) => setAvailableSeats(e.target.value)} aria-label=".form-control-lg example"/>
            <input id = "input-field" class="form-control form-control-lg" type="text" placeholder="owner" onChange = {(e) => setOwner(e.target.value)} aria-label=".form-control-lg example"/>
            <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder = "special notes" onChange = {(e) => setSpecialNotes(e.target.value)}></textarea>
  </div>
            <button id = "login-btn"type="button" onClick = {handleSubmit}class="btn btn-success">create carpool</button>
            
        </form>

    </div>
  )
}

export default CarpoolForm;
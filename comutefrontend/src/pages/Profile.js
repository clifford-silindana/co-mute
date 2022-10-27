import React, { Profiler, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import "../styles/Profile.css";
import Navigation from '../components/Navigation';
import avatar from "../images/profile2.jpg";

function Profile() {

    const[name, setName] = useState("clifford");
    const[surname, setSurname] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[vehicleDescription, setVehicleDescription] = useState("");
    const[vehicleRegistration, setVehicleRegistration] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const {user_id} = useParams();

    let url = " http://localhost:8001/users/";

    useEffect(() => {
        fetch(url + user_id)
        .then((response) => {return response.json()})
        .then((data) => {
        setName(data.name);
        setSurname(data.surname);
        setPhone(data.phone);
        setEmail(data.email);
        setPassword(data.password);
        setVehicleDescription(data.vehicleDescription);
        setVehicleRegistration(data.vehicleRegistration);
        setIsLoading(false);
    })

    }, [])
    

    function handleSubmit() {
        let data = {name, surname, phone, email, password, vehicleDescription,vehicleRegistration};
        let options = {method : "PUT", body : JSON.stringify(data), headers : {"Content-Type" : "application/json"}};
        fetch(url + user_id, options)
        .then((response) => {return response.json()})
        .then((data) => console.log(data.status))
        .catch((error) => console.log(error.message))
    }
  return (
    <div>
        <Navigation />
        <h1 className = "page-heading">Your Profile  {user_id}</h1>
        {isLoading ? <h1>Loading...</h1> :
        <div className = "profile-content-area">
            <div className = "profile-form-area">
        <form>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {name} onChange = {(e) => setName(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {surname} onChange = {(e) => setSurname(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {phone} onChange = {(e) => setPhone(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {email} onChange = {(e) => setEmail(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {password} onChange = {(e) => setPassword(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {vehicleDescription} onChange = {(e) => setVehicleDescription(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {vehicleRegistration} onChange = {(e) => setVehicleRegistration(e.target.value)}/>
    
            <button id = "edit-profile-btn"type="button" class="btn btn-warning" onClick = {handleSubmit}>Edit</button>
            <Link to = "/home"><button id = "back-profile-btn" type="button" class="btn btn-secondary">Cancel</button></Link>
        </form>
        </div>

        <div className = "profile-avatar-area">
            <img id = "avatar" src= {avatar} alt="profile avatar" />
        </div>


        </div>}
        
        
    </div>
  )
}

export default Profile;
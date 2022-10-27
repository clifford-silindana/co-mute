import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

//component imports
import Navigation from '../components/Navigation';

//style import
import "../styles/AllCarpools.css";

function AllCarpools() {
    const [carpools, setCarpools] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    
    //fetch(url, options)
    //let url = "https://localhost:7082/api/Customers"
    let url = "https://localhost:7212/api/CarPools";
    let options = {
        method : "GET",
        headers : {"Content-Type" : "application/json"},
    }
    useEffect(() => {
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            setCarpools(data);
            setIsLoading(false)
        })
    }, []);


  return (
    <div>
        <Navigation />
        <div className = "page-header">
        <h1 className = "page-heading">All Carpools</h1>
            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" />
                    <label class="form-label" for="form1">Search</label>
                </div>
                <button id = "search-btn"type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        
        {isLoading && <h1>Loading...</h1>}
        {carpools && carpools.map((carpool) => (
            <div className = "carpool-preview" key = {carpool.carpoolId}>
                 <h4 className = "preview-text">origin: {carpool.origin}</h4>
                 <h4 className = "preview-text">destination: {carpool.destination}</h4>
                 <Link to = {"/carpools/" + carpool.id}><button type="button" class="preview-btn">view carpool</button></Link>
                
            </div>
        ))}
    </div>



  );
}

export default AllCarpools;
import React from 'react'
import Navigation from '../components/Navigation';
import {UserAuth} from "../context/AuthContext";

function Home() {

  const {user, logout}= UserAuth();

  return (
    <div>
        <Navigation/>
        <h1 className = "page-heading">Here are your Joined CarPools {user && user.email}</h1>
    </div>
  )
}

export default Home;
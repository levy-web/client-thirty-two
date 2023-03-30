<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/Auth";
import Register from "./components/Auth";
import Navbar from "./components/Navbar";
import ListPatients from "./components/ListPatients";
import CreatePatient from "./components/CreatePatient";
=======

import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Prescription from './components/prescription/Prescription';   
import Update from './components/Appointment/Update';
import AppointmentForm from './components/Appointment/AppointmentForm';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {AuthContextProvider} from './components/context/AuthContext'
import Login from './components/loginSignup/Login';
import Signup from './components/loginSignup/Signup';
import Nav from './components/NavBar';
import Doctor from './components/Doctor/Doctor';
>>>>>>> main

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
<<<<<<< HEAD
   <BrowserRouter>
    <Navbar/> 

   <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/login" element={<Register/>} />
    <Route exact path="/patients" element={<ListPatients/>} />
    <Route exact path="/create" element={<CreatePatient/>} />
   </Routes>
   
   </BrowserRouter>
=======
    <div>
      {/* <AppointmentForm
        time="10:00am"
        patientId="123"
        doctorId="456"
        address="123 Main St"
      /> */}
      <Update
        appointmentTime="10:00am"
        appointmentAddress="123 Main St"
      />
      <Prescription />
    </div>

>>>>>>> main
  );
}

export default App;

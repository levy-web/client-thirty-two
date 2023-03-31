import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Login from "./components/Auth";
import Register from "./components/Auth";
import Navbar from "./components/Navbar";
import ListPatients from "./components/ListPatients";
import CreatePatient from "./components/CreatePatient";
import './App.css';
import Prescription from './components/prescription/Prescription';   
import Update from './components/Appointment/Update';
import AppointmentForm from './components/Appointment/AppointmentForm';
import {AuthContextProvider} from './components/context/AuthContext'
import Login from './components/loginSignup/Login';
import Signup from './components/loginSignup/Signup';
import Nav from './components/Nav';
import Doctor from './components/Doctor/Doctor';
import UpdatePatient from "./components/UpdatePatient";


function App() {

  return (

   <AuthContextProvider>
    <Nav/> 

   <Routes>
    <Route exact path="/" element={<ListPatients/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/patients" element={<Doctor/>} />
    <Route exact path="/create" element={<CreatePatient/>} />
    <Route exact path="/prescriptions" element={<Prescription />} />
    <Route exact path="/update_appoitmment/:id" element={<Update/>}/>
    <Route exact path="/update_patient/:id" element={<UpdatePatient/>}/>
   </Routes>
  
   </AuthContextProvider>




  );
}

export default App;

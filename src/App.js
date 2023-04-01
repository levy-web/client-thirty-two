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
import ProtectedRoute from './components/ProtectedRoutes';


function App() {

  return (

   <AuthContextProvider>
    <Nav/> 

   <Routes>
    <Route exact path="/" element={<ProtectedRoute><ListPatients/></ProtectedRoute>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/patients" element={<ProtectedRoute><Doctor/></ProtectedRoute>} />
    <Route exact path="/create" element={<ProtectedRoute><CreatePatient/></ProtectedRoute>} />
    <Route exact path="/prescriptions" element={<ProtectedRoute><Prescription /></ProtectedRoute>} />
    <Route exact path="/update_appoitmment/:appoitmmentId" element={<ProtectedRoute><Update/></ProtectedRoute>}/>
    <Route exact path="/update_patient/:patientId" element={<ProtectedRoute><UpdatePatient/></ProtectedRoute>}/>
   </Routes>
  
   </AuthContextProvider>




  );
}

export default App;

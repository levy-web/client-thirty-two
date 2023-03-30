
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

function App() {
  return (
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

  );
}

export default App;

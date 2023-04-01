import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Login from "./components/Auth";
import Register from "./components/Auth";
import Navbar from "./components/Navbar";
import ListPatients from "./components/ListPatients";
import CreatePatient from "./components/CreatePatient";
<<<<<<< HEAD
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
=======
import "./App.css";
import Prescription from "./components/prescription/Prescription";
import Update from "./components/Appointment/Update";
import AppointmentForm from "./components/Appointment/AppointmentForm";
import { AuthContextProvider } from "./components/context/AuthContext";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";
import Nav from "./components/Nav";
import Doctor from "./components/Doctor/Doctor";
import EditPatient from "./components/EditPatient";

function App() {
  const [user, setUser] = useState(null);
  const [patients, setPatients] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
>>>>>>> 295d79a8 (added api's)

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient])
  }  

  return (
      <AuthContextProvider>
        <Nav />

<<<<<<< HEAD
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




=======
        <Routes>
          <Route exact path="/" element={<ListPatients />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/patients" element={<Doctor />} />
          <Route exact path="/create" element={<CreatePatient />} />
          <Route exact path="/prescriptions" element={<Prescription />} />
          <Route exact path="/edit" element={<EditPatient />} />
          <Route
            exact
            path="/update"
            element={
              <Update
                appointmentTime="10:00am"
                appointmentAddress="123 Main St"
              />
            }
          />
        </Routes>
      </AuthContextProvider>
>>>>>>> 295d79a8 (added api's)
  );
}

export default App;

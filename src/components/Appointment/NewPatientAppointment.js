import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

function NewPatientAppointment({patientParams}) {
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [address, setAddress] = useState('');
  const params = useParams()

  console.log(patientParams.patientId)

  


  // useEffect(() => {
  //   fetch(`http://localhost:3000/appointments/${params.appoitmmentId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPatientName(`${data.patient.first_name} ${data.patient.last_name}`)
  //       setAddress(data.address)
  //     });
  // }, []);



  const handleFormSubmit = (e) => {
    e.preventDefault();
    // onSubmit({ time, patientName, doctorName, address });
    // clear form inputs after submitting
    setTime('');
    setPatientName('');
    setDoctorName('');
    setAddress('');

    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "patient_id": patientParams.patientId,
        "appointment_time": time,
        "address": address,
        "doctor_id": "1"
      }),
    })
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // setFirstName("");
        // setAge("");
        // setLastName("");
        // setPhoneNumber("");

      })
      .catch((error) => {
        console.error("There was a problem with the API call:", error);
      });

  };

  return (
    <div className='container'>
    
      <form onSubmit={handleFormSubmit}>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Appointment date </label>
        <input type="date" className='form-control' value={time} onChange={(e) => setTime(e.target.value)} />

        
        <br/>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Appointment address </label>
        <input className='form-control' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <br/>
        <button type="submit">add appointment</button>
      </form>
    </div>
  );
};

export default NewPatientAppointment;
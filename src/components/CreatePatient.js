import React, { useState } from 'react';

function CreatePatient() {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [appointmentTime, setAppointmentTime] = useState('');
  // const [prescription, setPrescription] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  // const handleAppointmentTimeChange = (e) => setAppointmentTime(e.target.value);
  // const handlePrescriptionChange = (e) => setPrescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your API or add function to save the patient and their details
    // ...

    fetch("http://localhost:3000/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        age: age,
        phone_number: phoneNumber
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
    <form onSubmit={handleSubmit}>
        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">First name</label>
        <input type="text" className="form-control" id="firstname" value={firstName} onChange={handleFirstNameChange} required />

        <br/>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Last name</label>
        <input type="text" className="form-control" id="lastname" value={lastName} onChange={handleLastNameChange} required />

        <br/>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Age</label>
        <input type="number" className="form-control" id="age" value={age} onChange={handleAgeChange} required />
        <br/>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">phone number</label>
        <input type="number" className="form-control" id="phone" value={phoneNumber} onChange={handlePhoneChange} required />
        <br/>


        {/* <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Appointment Date</label>
        <input type="date" className="form-control" id="appointmentDate" value={appointmentDate} onChange={handleAppointmentDateChange} required />

        <br/>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Appointment Time</label>
        <input type="time" className="form-control" id="appointmentTime" value={appointmentTime} onChange={handleAppointmentTimeChange} required />

        <br/>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Prescription</label>
        <textarea className="form-control" id="prescription" value={prescription} onChange={handlePrescriptionChange} required/>

        <br/> */}
      
      <button type="submit" className="btn btn-primary">Create Patient</button>
    </form>
    </div>
  );
}

export default CreatePatient;

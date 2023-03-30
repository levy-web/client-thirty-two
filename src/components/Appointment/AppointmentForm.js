import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ time, patientName, doctorName, address });
    // clear form inputs after submitting
    setTime('');
    setPatientName('');
    setDoctorName('');
    setAddress('');
  };

  return (
    <div className='container'>
    <form onSubmit={handleFormSubmit}>

      <br/>
      <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Patient name</label>
      <input type="text" className='form-control' value={patientName} onChange={(e) => setPatientName(e.target.value)} />

      <br/>
      <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Doctor name</label>
      <input type="text" className='form-control' value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
    
      <br/>

      <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Appointment time </label>
      <input type="text" className='form-control' value={time} onChange={(e) => setTime(e.target.value)} />

      
      <br/>

      <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Appointment address </label>
      <input className='form-control' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

      <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default AppointmentForm;


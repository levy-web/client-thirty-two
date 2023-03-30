import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [time, setTime] = useState('');
  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ time, patientId, doctorId, address });
    // clear form inputs after submitting
    setTime('');
    setPatientId('');
    setDoctorId('');
    setAddress('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Time:
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        Patient ID:
        <input
          type="text"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
      </label>
      <label>
        Doctor ID:
        <input
          type="text"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;


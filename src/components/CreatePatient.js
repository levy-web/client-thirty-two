import React, { useState } from 'react';

function CreatePatient() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleAppointmentDateChange = (e) => setAppointmentDate(e.target.value);
  const handleAppointmentTimeChange = (e) => setAppointmentTime(e.target.value);
  const handlePrescriptionChange = (e) => setPrescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your API or add function to save the patient and their details
    // ...

    // Clear the input fields
    setName('');
    setAge('');
    setGender('');
    setAppointmentDate('');
    setAppointmentTime('');
    setPrescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={handleAgeChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          className="form-control"
          id="gender"
          value={gender}
          onChange={handleGenderChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date"
          className="form-control"
          id="appointmentDate"
          value={appointmentDate}
          onChange={handleAppointmentDateChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="appointmentTime">Appointment Time:</label>
        <input
          type="time"
          className="form-control"
          id="appointmentTime"
          value={appointmentTime}
          onChange={handleAppointmentTimeChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="prescription">Prescription:</label>
        <textarea
          className="form-control"
          id="prescription"
          value={prescription}
          onChange={handlePrescriptionChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Patient</button>
    </form>
  );
}

export default CreatePatient;

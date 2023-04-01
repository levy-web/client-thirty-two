import React, { useState } from "react";

function CreatePatient({ handleAddPatient }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [prescription, setPrescription] = useState("");

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
    fetch("/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        gender: gender,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        prescription: prescription,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        handleAddPatient(data);
        console.log(data);

        setName("");
        setAge("");
        setGender("");
        setAppointmentDate("");
        setAppointmentTime("");
        setPrescription("");
      })
      .catch((error) => {
        console.error("There was a problem with the API call:", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="InputName"
          className="form-label text-capitalize fs-6 fw-bold fst-italic"
        >
          Patient name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <br />

        <label
          htmlFor="InputName"
          className="form-label text-capitalize fs-6 fw-bold fst-italic"
        >
          Age:
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={handleAgeChange}
          required
        />
        <br />

        <label
          htmlFor="InputName"
          className="form-label text-capitalize fs-6 fw-bold fst-italic"
        >
          Gender
        </label>
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

        <br />

        <label
          htmlFor="InputName"
          className="form-label text-capitalize fs-6 fw-bold fst-italic"
        >
          Appointment Date
        </label>
        <input
          type="date"
          className="form-control"
          id="appointmentDate"
          value={appointmentDate}
          onChange={handleAppointmentDateChange}
          required
        />

        <br />

        <label
          htmlFor="InputName"
          className="form-label text-capitalize fs-6 fw-bold fst-italic"
        >
          Appointment Time
        </label>
        <input
          type="time"
          className="form-control"
          id="appointmentTime"
          value={appointmentTime}
          onChange={handleAppointmentTimeChange}
          required
        />

        <br />

        <label
          htmlFor="InputName"
          className="form-label text-capitalize fs-6 fw-bold fst-italic"
        >
          Prescription
        </label>
        <textarea
          className="form-control"
          id="prescription"
          value={prescription}
          onChange={handlePrescriptionChange}
          required
        />

        <br />

        <button type="submit" className="btn btn-primary">
          Create Patient
        </button>
      </form>
    </div>
  );
}

export default CreatePatient;

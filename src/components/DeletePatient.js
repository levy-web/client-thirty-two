import React, { useState, useEffect } from "react";

function DeletePatient({ patientId, onDelete }) {
  const [patients, setPatients] = useState([]);

  // useEffect(() => {
  //   fetch("/patients")
  //     .then((response) => response.json())
  //     .then((data) => setPatients(data));
  // }, []);

  const handleDelete = (id) => {
    fetch(`https://docs-api-03k5.onrender.com/patients/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const newPatients = patients.filter((patient) => patient.id !== id);
        setPatients(newPatients);
        onDelete(patientId)
      })
      .catch((error) => console.error(error));
  };

  return (
    <button onClick={handleDelete}>
      Delete Patient
    </button>
  )
}

export default DeletePatient

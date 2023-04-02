import React, { useState, useEffect } from 'react'

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetch('/prescriptions')
      .then(response => response.json())
      .then(data => setPrescriptions(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dosage</th>
            <th>Price</th>
            <th>Patient name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map(prescription => (
            <tr key={prescription.id}>
              <td>{prescription.name}</td>
              <td>{prescription.dosage}</td>
              <td>{prescription.price}</td>
              <td>{prescription.patientName}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Prescription

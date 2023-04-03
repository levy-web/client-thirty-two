import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Prescription.css'

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [price, setPrice] = useState('');
  const [patientName, setPatientName] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  useEffect(() => {
    fetch('https://doctors-api-b7iv.onrender.com/prescriptions')
      .then(response => response.json())
      .then(data => setPrescriptions(data))
      .catch(error => console.error(error));
  }, []);




  const handleEditClick = (prescription) => {
    setSelectedPrescription(prescription);
    setName(prescription.name);
    setDosage(prescription.dosage);
    setPrice(prescription.price);
    setPatientName(prescription.patientName);
  }

  const handleDeleteClick = (prescription) => {
    fetch(`https://doctors-api-b7iv.onrender.com/prescriptions/${prescription.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedPrescriptions = prescriptions.filter(p => p.id !== prescription.id);
        setPrescriptions(updatedPrescriptions);
      })
      .catch(error => console.error(error));
      }
      
      return (
      <div className="prescription container">

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
      <td>{prescription.patient.first_name}</td>
      <td className="action-buttons">
      <Link key={prescription.id} to={`/update_prescription/${prescription.id}`}><button onClick={() => handleEditClick(prescription)}>Edit</button></Link>
      <button onClick={() => handleDeleteClick(prescription)}>Delete</button>
      </td>
      </tr>
      ))}
      </tbody>
      </table>
      </div>
      )
      }
      
      export default Prescription
      
      
      
      
      
      

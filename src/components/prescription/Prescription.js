import React, { useState, useEffect } from 'react'

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [price, setPrice] = useState('');
  const [patientName, setPatientName] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/prescriptions')
      .then(response => response.json())
      .then(data => setPrescriptions(data))
      .catch(error => console.error(error));
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDosageChange = (event) => {
    setDosage(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const prescriptionData = {
      name: name,
      dosage: dosage,
      price: price,
      patientName: patientName
    };

    if (selectedPrescription) {
      // Update existing prescription
      fetch(`http://localhost:3000/prescriptions/${selectedPrescription.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prescriptionData)
      })
        .then(response => response.json())
        .then(data => {
          const updatedPrescriptions = prescriptions.map(prescription => {
            if (prescription.id === data.id) {
              return data;
            } else {
              return prescription;
            }
          });
          setPrescriptions(updatedPrescriptions);
          setSelectedPrescription(null);
        })
        .catch(error => console.error(error));
    } else {
      // Create new prescription
      fetch('http://localhost:3000/prescriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prescriptionData)
      })
        .then(response => response.json())
        .then(data => {
          setPrescriptions([...prescriptions, data]);
        })
        .catch(error => console.error(error));
    }

    // Clear form input values
    setName('');
    setDosage('');
    setPrice('');
    setPatientName('');
  }

  const handleEditClick = (prescription) => {
    setSelectedPrescription(prescription);
    setName(prescription.name);
    setDosage(prescription.dosage);
    setPrice(prescription.price);
    setPatientName(prescription.patientName);
  }

  const handleDeleteClick = (prescription) => {
    fetch(`http://localhost:3000/prescriptions/${prescription.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedPrescriptions = prescriptions.filter(p => p.id !== prescription.id);
        setPrescriptions(updatedPrescriptions);
      })
      .catch(error => console.error(error));
      }
      
      return (
      <div>
      <form onSubmit={handleFormSubmit}>
      <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
      <label htmlFor="dosage">Dosage:</label>
      <input type="text" id="dosage" value={dosage} onChange={handleDosageChange} />
      </div>
      <div>
      <label htmlFor="price">Price:</label>
      <input type="text" id="price" value={price} onChange={handlePriceChange} />
      </div>
      <div>
      <label htmlFor="patientName">Patient Name:</label>
      <input type="text" id="patientName" value={patientName} onChange={handlePatientNameChange} />
      </div>
      <button type="submit">{selectedPrescription ? 'Update' : 'Create'}</button>
      </form>
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
      <button onClick={() => handleEditClick(prescription)}>Edit</button>
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
      
      
      
      
      
      

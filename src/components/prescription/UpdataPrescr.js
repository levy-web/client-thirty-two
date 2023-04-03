import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'


function UpdataPrescr(){
    const navigate = useNavigate()

    const [prescriptions, setPrescriptions] = useState([]);
    const [name, setName] = useState('');
    const [dosage, setDosage] = useState('');
    const [price, setPrice] = useState('');
    const params = useParams()
   

    useEffect(() => {
        fetch(`https://doctors-api-b7iv.onrender.com/prescriptions/${params.prescriptionId}`)
          .then((response) => response.json())
          .then((data) => {
            setName(data.name)
            setDosage(data.dosage)
            setPrice(data.price)
            console.log(data)
    
            
          });
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
    
      // const handlePatientNameChange = (event) => {
      //   setPatientName(event.target.value);
      // }
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const prescriptionData = {
          name: name,
          dosage: dosage,
          price: price
        };
    

        // Update existing prescription
        fetch(`https://doctors-api-b7iv.onrender.com/prescriptions/${params.prescriptionId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prescriptionData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            navigate('/prescriptions')
            
            // const updatedPrescriptions = prescriptions.map(prescription => {
            //   if (prescription.id === data.id) {
            //     return data;
            //   } else {
            //     return prescription;
            //   }
            // });
            // setPrescriptions(updatedPrescriptions);
            // setSelectedPrescription(null);
        })
        .catch(error => console.error(error));
    }

    

      

    return(
        <div className='container'>
        <form onSubmit={handleFormSubmit}>
            <br/>
            <div >
            <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">update prescription</label>
            <br/>
            <label htmlFor="name" className="form-label text-capitalize fs-6 fw-bold fst-italic">medicine name</label>
            <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange} />
            </div>
            <div>
            <label htmlFor="dosage" className="form-label text-capitalize fs-6 fw-bold fst-italic">how to use dosage</label>
            <input type="text" id="dosage" className="form-control" value={dosage} onChange={handleDosageChange} />
            </div>
            <div>
            <label htmlFor="price" className="form-label text-capitalize fs-6 fw-bold fst-italic">Price</label>
            <input type="text" id="price" className="form-control" value={price} onChange={handlePriceChange} />
            </div>
            <div>
            {/* <label htmlFor="patientName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Patient Name:</label>
            <input type="text" id="patientName" value={patientName} onChange={handlePatientNameChange} /> */}
            </div>
            <button type="submit">update prescription</button>
        </form>
        </div>
    )
}

export default UpdataPrescr
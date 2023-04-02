import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function EditPatient({
  prescriptions,
  patient,
  params,
  patientAge,
  patientPhoneNum,
  setPatientPhoneNum,
  setPrescriptions,
  setPatientAge
}) {
  const navigate = useNavigate()
  



  function handleDelete(){
    fetch(`https://doctors-api-b7iv.onrender.com/patients/${params.patientId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((d)=>{
        console.log(d)
        navigate('/')
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your API or update function with the modified data
    // ...
    fetch(`https://doctors-api-b7iv.onrender.com/patients/${params.patientId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          age: patientAge,
          phone_number: patientPhoneNum,
          // prescriptions: prescriptions
        })
      })
        .then(response => {
          // if (!response.ok) {
          //   throw new Error('Network response was not ok');
          // }
          return response.json();
        })
        .then(data => {
          console.log('Patient updated:', data);
          navigate('/')

          // Update patient state or do something with the updated data
        })
        .catch(error => {
          console.error('There was a problem with the API call:', error);
        });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="InputName" className="form-label text-capitalize fs-2 fw-bold">{`${patient.first_name} ${patient.last_name}`}</label>

      <br/>

      <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Patient age</label>
      <input type="number" className='form-control' defaultValue={patientAge} onChange={(e) => setPatientAge(e.target.value)} />
      <br/>
      <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Patient phone number</label>
      <input type="number" className='form-control' value={patientPhoneNum} onChange={(e) => setPatientPhoneNum(e.target.value)} />
      <br/>

      <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">add prescription</label>
      <textarea className='form-control' value={prescriptions} onChange={(event) => setPrescriptions(event.target.value)}/>

      <br/>
      <button type="submit" className="btn btn-primary">Save Changes</button>
      
      </form>
      <button onClick={handleDelete} className="btn btn-primary">Delete Patient</button>
    </div>
  );
}
export default EditPatient;

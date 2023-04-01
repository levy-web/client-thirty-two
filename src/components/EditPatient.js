import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
function EditPatient() {
  const [patientAge, setPatientAge] = useState('');
  const [patient, setPatient] = useState('');
  const [patientPhoneNum, setPatientPhoneNum] = useState('');
  const [prescriptions, setPrescriptions] = useState("");
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/patients/${params.patientId}`)
      .then((response) => response.json())
      .then((data) => {
        setPatient(data)
        setPatientAge(data.age)
        setPatientPhoneNum(data.phone_number)

        
      });
  }, []);

  function handleDelete(){
    fetch(`http://localhost:3000/patients/${params.patientId}`, {
      method: "DELETE",
    })
      // .then(() => {
      //   const newPatients = patients.filter((patient) => patient.id !== id);
      //   setPatients(newPatients);
      //   onDelete(patientId)
      // })
      // .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your API or update function with the modified data
    // ...
    fetch(`http://localhost:3000/patients/${params.patientId}`, {
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
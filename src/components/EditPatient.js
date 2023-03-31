import React, { useState } from "react";
    function EditPatient({ patientId }) {
    const [patientAge, setPatientAge] = useState('');
    const [patientPhoneNum, setPatientPhoneNum] = useState("");
    const [prescriptions, setPrescriptions] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // Call your API or update function with the modified data
        // ...
    };
    return (
        <form onSubmit={handleSubmit}>
        
        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Patient age</label>
        <input type="number" className='form-control' value={patientAge} onChange={(e) => setPatientAge(e.target.value)} />
        <br/>
        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Patient phone number</label>
        <input type="number" className='form-control' value={patientPhoneNum} onChange={(e) => setPatientPhoneNum(e.target.value)} />
        <br/>

        <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">add prescription</label>
        <textarea className='form-control' value={prescriptions} onChange={(event) => setPrescriptions(event.target.value)}/>

        <br/>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
    );
    }
    export default EditPatient;
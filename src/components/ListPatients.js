import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientDetails from './PatientDetails'

function ListPatients({ user }) {
<<<<<<< HEAD
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
      fetch("http://localhost:3000/patients")
        .then((response) => response.json())
        .then((data) => setPatients(data));
    }, []);
=======
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);
>>>>>>> 295d79a8 (added api's)



    const patientsNameList = patients.map((item)=>{
      return <Link to={`/update_patient/${item.id}`}><li key={item.id} className="pt-3 l1">{`${item.first_name} ${item.last_name}`}</li></Link>
    })


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 bg-dark pt-1">
          <nav className="navbar heads pt-0 ">
            <div className="container-fluid pt-0 ">
              <h2>PATIENT LIST</h2>
              <div className="d-flex mb-2">
                <Link to="/create">
                  <button className="btn btn-outline-info btn-sm" type="submit">
                    Add Patient ➕
                  </button>
                </Link>
              </div>
            </div>
          </nav>

          <div className="list pt-2">
<<<<<<< HEAD
            <ol>
              {patientsNameList}
            </ol>
=======
            {patients.map((patient) => (
              <li key={patient.id} className="pt-3 l1">
                {patient.name}, {patient.age}, {patient.gender}
              </li>
            ))}
>>>>>>> 295d79a8 (added api's)
          </div>
        </div>

        <div className="col-md-7 offset-md-1 bg-dark pt-1">
<<<<<<< HEAD
          <PatientDetails/>

=======
          <nav className="navbar pt-0 heads">
            <div className="container-fluid ">
              <h2>PATIENT DETAILS</h2>
              <div className="d-flex mb-2">
                <Link to="/update">
                  <button
                    className="btn btn-outline-info btn-sm"
                    href="/addpatient"
                    type="submit"
                  >
                    Update Appoinment ➕
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="pt-2">
            <div className="card ms-1 mb-1" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Patient title</h5>
                <h5 className="card-title">First Name: Last Name:</h5>
                <p className="card-text">Appointment Date: </p>
                <p className="card-text">Appointment Time: </p>
                <p className="card-text">Prescription: </p>
                <Link to="/edit">
                  <button className="btn btn-primary btn-sm">
                    Edit Patient
                  </button>
                </Link>

                <DeletePatient>
                  <button className="btn btn-danger btn-sm">
                    Delete Patient
                  </button>
                </DeletePatient>
              </div>
            </div>
          </div>
>>>>>>> 295d79a8 (added api's)
        </div>
      </div>
    </div>
  );
}

export default ListPatients;

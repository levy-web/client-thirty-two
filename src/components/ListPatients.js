import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeletePatient from "./DeletePatient";

function ListPatients({ user }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

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
            {patients.map((patient) => (
              <li key={patient.id} className="pt-3 l1">
                {patient.name}, {patient.age}, {patient.gender}
              </li>
            ))}
          </div>
        </div>

        <div className="col-md-7 offset-md-1 bg-dark pt-1">
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
        </div>
      </div>
    </div>
  );
}

export default ListPatients;

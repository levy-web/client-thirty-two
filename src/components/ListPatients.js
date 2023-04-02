import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import PatientDetails from './PatientDetails'

function ListPatients({ user }) {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
      fetch("https://docs-api-03k5.onrender.com/patients")
        .then((response) => response.json())
        .then((data) => setPatients(data));
    }, []);



    const patientsNameList = patients.map((item)=>{
      return <Link key={item.id} to={`/update_patient/${item.id}`}><li className="pt-3 l1">{`${item.first_name} ${item.last_name}`}</li></Link>
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
            <ol>
              {patientsNameList}
            </ol>
          </div>
        </div>

        <div className="col-md-7 offset-md-1 bg-dark pt-1">
          <PatientDetails/>

        </div>
      </div>
    </div>
  );
}

export default ListPatients;

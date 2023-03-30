import React from "react";
import { Link } from "react-router-dom";
import DeletePatient from "./DeletePatient";

function ListPatients({ user }) {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000")
//       .then((response) => response.json())
//       .then((data) => setTodos(data));
//   }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 bg-dark pt-1">
          <nav className="navbar heads pt-0 ">
            <div className="container-fluid pt-0 ">
              <h2>PATIENT LIST</h2>
              <div className="d-flex mb-2">
                <Link to="/patients">
                  <button className="btn btn-outline-info btn-sm" type="submit">
                    Add Patient ➕
                  </button>
                </Link>
              </div>
            </div>
          </nav>

          <div className="list pt-2">
            <li className="pt-3 l1">Add a Patient</li>
            <li className="pt-3 l1">Add a Patient</li>
            <li className="pt-3 l1">Add a Patient</li>
            <li className="pt-3 l1">Add a Patient</li>
            <li className="pt-3 l1">Add a Patient</li>
            <li className="pt-3 l1">Add a Patient</li>
          </div>
        </div>

        <div className="col-md-7 offset-md-1 bg-dark pt-1">
          <nav className="navbar pt-0 heads">
            <div className="container-fluid ">
              <h2>PATIENT DETAILS</h2>
              <div className="d-flex mb-2">
                <Link to="/create">
                  <button
                    className="btn btn-outline-info btn-sm"
                    href="/addpatient"
                    type="submit"
                  >
                    Add Patient ➕
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="pt-2">
            <div className="card ms-1 mb-1" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 clclassNameass="card-title">Patient title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary btn-sm">Edit Patient</button>
                <DeletePatient>
                <button className="btn btn-danger btn-sm">Delete Patient</button>
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

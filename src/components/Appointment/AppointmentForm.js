import React, { useState } from "react";
import EditPatient from "../EditPatient";

const AppointmentForm = ({ onSubmit }) => {
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [address, setAddress] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ time, patientName, doctorName, address });
    // clear form inputs after submitting
    setTime("");
    setPatientName("");
    setDoctorName("");
    setAddress("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label
                    htmlFor="InputName"
                    className="form-label text-capitalize fs-6 fw-bold fst-italic"
                  >
                    Patient name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="InputName"
                    className="form-label text-capitalize fs-6 fw-bold fst-italic"
                  >
                    Doctor name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="InputName"
                    className="form-label text-capitalize fs-6 fw-bold fst-italic"
                  >
                    Appointment time{" "}
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <EditPatient/>
        </div>

      </div>
    </div>
  );
};

export default AppointmentForm;

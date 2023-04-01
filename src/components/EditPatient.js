import React, { useState } from "react";
    function EditPatient({ patientId }) {
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [prescriptions, setPrescriptions] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // Call your API or update function with the modified data
        // ...
    };
    return (
        <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">
                  Appointment Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">
                  Appointment Time:
                </label>
                <input
                  type="time"
                  className="form-control"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">
                  Prescriptions:
                </label>
                <textarea
                  className="form-control"
                  value={prescriptions}
                  onChange={(e) => setPrescriptions(e.target.value)}
                />
              </div>
  
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
       
    );
    }
    export default EditPatient;
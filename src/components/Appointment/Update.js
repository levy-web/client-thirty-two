import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import { Link } from "react-router-dom";
import DeletePatient from "../DeletePatient";
import EditPatient from "../EditPatient";

const Update = ({ appointmentTime, appointmentAddress }) => {
  const [updatedTime, setUpdatedTime] = useState(appointmentTime);
  const [updatedAddress, setUpdatedAddress] = useState(appointmentAddress);

  const handleFormSubmit = ({ time, patientId, doctorId, address }) => {
    // check if the appointment time and address are different
    if (time !== appointmentTime || address !== appointmentAddress) {
      setUpdatedTime(time);
      setUpdatedAddress(address);
      // show a success message
      alert('Appointment updated successfully!');
    } else {
      // show an error message if there are no changes
      alert('No changes to update!');
    }
  };

  return (
    <div className="container">
      <div className="row">

        <div className="col-md-5 offset-md-1 bg-dark pt-1">
          <nav className="navbar pt-0 heads">
            <div className="container-fluid ">
              <h2>update appointment</h2>
            </div>
          </nav>
          <div className="pt-2">
            <AppointmentForm />            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

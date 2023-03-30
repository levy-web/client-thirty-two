import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

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
    <div>
      <h2>Update Appointment</h2>
      <p>Current time: {appointmentTime}</p>
      <p>Current address: {appointmentAddress}</p>
      <AppointmentForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Update;

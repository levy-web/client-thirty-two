import React from 'react';
import Update from './components/Appointment/Update';
import AppointmentForm from './components/Appointment/AppointmentForm';

function App() {
  return (
    <div>
      {/* <AppointmentForm
        time="10:00am"
        patientId="123"
        doctorId="456"
        address="123 Main St"
      /> */}
      <Update
        appointmentTime="10:00am"
        appointmentAddress="123 Main St"
      />
    </div>
  );
}

export default App;

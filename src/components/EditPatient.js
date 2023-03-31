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
        <form onSubmit={handleSubmit}>
        <label>
            Appointment Date:
            <input
            type="date"
            value={appointmentDate}
            onChange={(event) => setAppointmentDate(event.target.value)}
            />
        </label>
        <label>
            Appointment Time:
            <input
            type="time"
            value={appointmentTime}
            onChange={(event) => setAppointmentTime(event.target.value)}
            />
        </label>
        <label>
            Prescriptions:
            <textarea
            value={prescriptions}
            onChange={(event) => setPrescriptions(event.target.value)}
            />
        </label>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
    );
    }
    export default EditPatient;
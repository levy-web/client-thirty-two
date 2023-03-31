import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
function PatientDetails(){

    const [patients, setPatients] = useState([]);
    const [patientsAppointment, setPatientsAppointment] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/appointments")
        .then((response) => response.json())
        .then((data) => {
          setPatients(data[0].patient)
          setPatientsAppointment(data)
          console.log(data[0])
        });
    }, []);




    const apps = patientsAppointment.map((item)=>{
      return(
        <div className="card ms-1 mb-1" >
          <div className="ms-auto mb-2">
            <Link to={`/update_appoitmment/${item.id}`}>
              <button
                className="btn btn-outline-info btn-sm"
                
                type="submit"
              >
                Update appointment ➕
              </button>
            </Link>
          </div>
          <div className="card ms-1 mb-1" >
            <div className="card-body">
              <h5 className="card-title">full name: {item.patient.first_name} {item.patient.last_name} </h5>
              <h5>age: {item.patient.age}</h5>
              <h5>phone number: {item.patient.phone_number}</h5>
              <p>appointment_time: {item.appointment_time}</p>
              <small>appointment_address: {item.address}</small>            
            </div>
          </div>
        </div>
      )

    })

    return(
        <>        
        <nav className="navbar pt-0 heads">
        <div className="container-fluid ">
          <h2>Upcoming appointment</h2>

        </div>
      </nav>
      <div className="pt-2">  
        {apps}       
      </div>
      </>

    )
}
export default PatientDetails
import React,{useState} from "react"
import {  useNavigate, NavLink } from "react-router-dom"
import {UserAuth} from '../context/AuthContext'

function Signup(){

    const[emailaddress, setEmail] = useState('')
    const[password, setPassword] = useState ('')
    const[confirmPassword, setconfirmPassword] = useState ('')
    const[username, setUsername] = useState ('')
    const[speciality, setSpeciality] = useState ('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
  
  
    const handleSubmit = async(e) =>{
      e.preventDefault();

      setError("")
    
      try{
        await createUser(username, speciality, emailaddress, confirmPassword, password)
        
      }catch(error){
        setError(error.message);
      }
    }
    
    function passwordChange(e){
      setPassword(e.target.value)
    }
  
    function emailaddressChange(e){
      setEmail(e.target.value)
    }

    function usernameChange(e){
      setUsername(e.target.value)
    }

    function confirmPasswordChange(e){
      setconfirmPassword(e.target.value)
    }

    function onSpecialistChnge(e){
      setSpeciality(e.target.value)
      console.log(e.target.value)

    }

    return(
        <div>
        <div className="row mt-5 p-5 m-auto">
        <h2 className="mb-4 text-danger fw-bold fst-italic">CREATE ACCOUNT</h2>
          <form onSubmit={handleSubmit}>

            <label htmlFor="InputUsername" className="form-label text-capitalize fs-6 fw-bold fst-italic">doctors username</label>
            <input value={username} onChange={usernameChange} type="text" className="form-control"></input>
            <br />

            <label htmlFor="InputEmail" className="form-label text-capitalize fs-6 fw-bold fst-italic">doctors email</label>
            <input value={emailaddress} onChange={emailaddressChange} type="email" className="form-control"></input>
            <br />

            <label htmlFor="InputEmail" className="form-label text-capitalize fs-6 fw-bold fst-italic">Select speciality</label>
            <select onChange={onSpecialistChnge} className="form-select" aria-label="Default select example">
              <option value={speciality}>select speciality</option>
              <option value="Surgery">Family medicine</option>
              <option value="Surgery">Surgery</option>
              <option value="Physical medicine and Rehabilitation">Physical medicine and Rehabilitation</option>
              <option value="Preventive medicine">Preventive medicine</option>
              <option value="Allergy and Immunology">Allergy and Immunology</option>
              <option value="Anesthesiology">Anesthesiology</option>
            </select>
            <br />

              <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Password </label>
              <input value={password} onChange={passwordChange} className="form-control" type="password" />
            <br/>
            
              <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">confirm password </label>
              <input value={confirmPassword} onChange={confirmPasswordChange} className="form-control" type="password" />
            <br />
            <button  className="btn btn-primary" type="submit">Sign Up</button>
          </form>
          <br />
          <NavLink to={'/login'}>Already have an account? click to Login</NavLink>
        </div>
        
      </div> 
    )    
}

export default Signup
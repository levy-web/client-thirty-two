import React,{useState } from "react"
import {  useNavigate, Link } from "react-router-dom"
import {UserAuth} from '../context/AuthContext'


function Login(){

    const[username, setUsername] = useState ('')
    const[password, setPassword] = useState ('')
    const {signIn} = UserAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    
  
  
    const handleSubmit = async(e) =>{
      e.preventDefault();

      setError("")
    
      try{
        await signIn(username, password)

      }catch(error){
        setError(error.message);
      }


    }
    
    function passwordChange(e){
      setPassword(e.target.value)
    }
  
    function usernameChange(e){
      setUsername(e.target.value) 
    }
    
    return(
        <div >
          
        <div className="row p-5 m-auto">
        <h2 className="mb-4 text-danger fw-bold fst-italic">LOGIN</h2>
        <form onSubmit={handleSubmit}>
              <label htmlFor="InputEmail" className="form-label fs-6 fw-bold text-capitalize fst-italic">doctors username or email</label>
              <input value={username} onChange={usernameChange} type="text" className="form-control"></input>
            <br />
              <label htmlFor="InputName" className="form-label text-capitalize fs-6 fw-bold fst-italic">Password </label>
              <input value={password} onChange={passwordChange} className="form-control" type="password" />
            <br/>
            <button  className="btn btn-primary" type="submit">Login</button>
          </form>
          <p><Link to={'/signup'}>Already have an account? Sign Up here</Link></p>
        </div> 
      </div> 
    )
}

export default Login
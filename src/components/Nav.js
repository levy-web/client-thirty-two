import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom"
import {UserAuth} from './context/AuthContext'

function Nav(){
  const navigate = useNavigate()
  const [error, setError] = useState("")




  const { logout} = UserAuth()

  const logoutUser = async(e) =>{
    setError("")
    try{
        await logout()

      }catch(error){
        setError(error.message);
      }
    }


    
  return(
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            

            <div className="container-fluid m-2">
                <NavLink to={"/"} className="navbar-brand fw-bold fst-italic fs-2 text-primary ms-5 ">Home</NavLink>

                <ul className="navbar-nav ms-5">
                    <NavLink to={"/doctors"} className="navbar-brand text-light ms-5">Doctor</NavLink>
                    <NavLink to={"/appointments"} className="navbar-brand text-light ms-2">Appointments</NavLink>
                    <NavLink to={"/prescriptions"} className="navbar-brand text-light ms-2">Prescriptions</NavLink>
                    <NavLink to={"/about"} className="navbar-brand text-light ms-2">About</NavLink>
                    <NavLink to={"/contact"} className="navbar-brand text-light ms-2">Contact Us</NavLink>
                </ul>


                <ul className="navbar-nav ms-auto">
                    <NavLink to={"/login"} className="nav-item nav-link text-light me-2">Login</NavLink>
                    <NavLink to={"/signup"} className="nav-item text-light nav-link me-2">Signup</NavLink>
                    <NavLink onClick={logoutUser} className="nav-item text-light nav-link me-5">Logout</NavLink>
                </ul>
            </div>


        </nav>
      </div>
    )
  }
export default Nav;
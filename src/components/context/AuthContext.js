import { createContext, useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom"

const UserContext = createContext();




export const AuthContextProvider = ({children}) => {
    // declare all method for app
    const [user, setUser] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
      fetch("https://docs-api-03k5.onrender.com/me",{
        method:"GET"
      })
      .then((r) => r.json())
      .then((user) => {
            setUser(user)
            console.log(user)
          });
      },[])


    

    const createUser = (username, speciality, emailaddress, confirmPassword, password) => {
        let formData = {
            "username": username,
            "password": password,
            "email": emailaddress,
            "speciality":speciality,
            "confirm_password": confirmPassword
          }
        fetch('https://docs-api-03k5.onrender.com/doctors',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            console.log(data)
            navigate('/')
          })
    }


      const signIn = (username, password) => {
        let formData = {
            "username": username,
            "password": password
          }
        fetch('https://docs-api-03k5.onrender.com/doctors/login',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            console.log(data)
            navigate('/')           
          })
      }

   

    const logout = () => {
      fetch('https://docs-api-03k5.onrender.com/doctors/logout', {
        method: "DELETE"
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        navigate('/login')  
      })
    }
    
    



    return(
        <UserContext.Provider value={{user, signIn, logout, createUser}}>

            {children}

        </UserContext.Provider>
    )

}
export const UserAuth = () =>{
    return useContext(UserContext)
}
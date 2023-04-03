import { createContext, useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom"

const UserContext = createContext();




export const AuthContextProvider = ({children}) => {
    // declare all method for app
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`https://doctors-api-b7iv.onrender.com/me/${sessionStorage.getItem("user")}`,{
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
        fetch('https://doctors-api-b7iv.onrender.com/doctors',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((user)=>{
            console.log(user)
            sessionStorage.setItem("user", user.id);
            navigate('/')
          })
    }


      const signIn = (username, password) => {
        let formData = {
            "username": username,
            "password": password
          }
        fetch('https://doctors-api-b7iv.onrender.com/doctors/login',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((user)=>{
            console.log(user)
            sessionStorage.setItem("user", user.user.id);
            navigate('/')           
          })
      }

   

    const logout = () => {
      fetch('https://doctors-api-b7iv.onrender.com/doctors/logout', {
        method: "DELETE"
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        sessionStorage.removeItem("user", user)
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
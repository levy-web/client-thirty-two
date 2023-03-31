import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();




export const AuthContextProvider = ({children}) => {
    // declare all method for app
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);

    

    const createUser = (username, speciality, emailaddress, confirmPassword, password) => {
        let formData = {
            "username": username,
            "password": password,
            "email": emailaddress,
            "speciality":speciality,
            "confirmPassword": confirmPassword
          }
        fetch('/signup',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            console.log(data)
          })
    }


      const signIn = (username, password) => {
        let formData = {
            "username": username,
            "password": password
          }
        fetch('/login',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })
          .then((res)=> res.json())
          .then((data)=>{
            console.log(data)                
          })
      }

   

    const logout = () => {
      fetch('/logout')
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
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
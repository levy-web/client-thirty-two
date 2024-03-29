import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";


const ProtectedRoute = ({children}) => {
    
    const {user} = UserAuth()

    if (sessionStorage.getItem("user")== null){
        return <Navigate to='/login'/>
    }
    return children
}

export default ProtectedRoute;
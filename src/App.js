import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/Auth";
import Register from "./components/Auth";
import Navbar from "./components/Navbar";
import ListPatients from "./components/ListPatients";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
   <BrowserRouter>
    <Navbar/> 

   <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/login" element={<Register/>} />
    <Route exact path="/patients" element={<ListPatients/>} />
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;

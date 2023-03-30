import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Prescription from './components/prescription/Prescription';

function App() {
  return (
   <div>
    <Prescription />
   </div>
   
  );
}

export default App;

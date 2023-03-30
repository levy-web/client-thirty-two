import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {AuthContextProvider} from './components/context/AuthContext'
import Login from './components/loginSignup/Login';
import Signup from './components/loginSignup/Signup';
import Nav from './components/NavBar';
import Doctor from './components/Doctor/Doctor';

function App() {
  return (
    <AuthContextProvider >
      <Nav />
      <Routes>
        <Route path='/' element={<Doctor />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>


    </AuthContextProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './home'
import About from './About'
import { useState } from 'react'
import Profile from './Profile'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AllUsers from './AllUsers';
import Navbar from './Navbar';
import RegistrationUser from './RegistrationUser'
import Updateuser from './Updateuser';
import Postjob from './jobs/Postjob';
import Jobshome from './jobs/Jobshome';
import Updatejob from './jobs/UpdateJob';
import Login from './Login';

function App() {
  const [data,setdata]= useState(10)
  return (
    <>
  <BrowserRouter>
 <Navbar/>
  <Routes>
    <Route path="/" element={<Home a={data}/>} />
    <Route path="/Profile" element={<Profile/>}/>
   
    <Route path="/AllUsers" element={<AllUsers/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/RegistrationUser" element={<RegistrationUser/>} />
    <Route path="/Postjob" element={<Postjob/>} />
    <Route path="/Jobshome" element={<Jobshome/>} />
    <Route path="/UpdatePage/:id" element={<Updateuser/>} />
    <Route path="/UpdateJob/:jobid" element={<Updatejob/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="*" element={<h1>Page not found</h1>} />

    
   
  
    {/* <About new={data}/> */}
    

  </Routes>
  
  </BrowserRouter>
   
    </>
  );
}

export default App;

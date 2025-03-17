import React from 'react'
import './App.css';
import { useNavigate,NavLink } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
    function logout(){
      localStorage.clear()
      navigate('/Login')
    }
    
    const userauth = localStorage.getItem("TAuth")

    const navLinkStyles = ({ isActive }) => {
      return {
        color: isActive ? "rgb(40, 4, 99)" : "",
        backgroundColor: isActive ? "white" : "",
        
  
      }
    }
    
    
   // console.log(userauth)
  return (
    <>
    {
      userauth?
      <div className='Navwrapper'>
    <NavLink to='/' className='Navlinkstyle' style={navLinkStyles}>Home</NavLink>
    <NavLink to='/Jobshome' className='Navlinkstyle' style={navLinkStyles}>Jobs</NavLink>
    <NavLink to='/Postjob' className='Navlinkstyle' style={navLinkStyles}>Postjob</NavLink>
    <NavLink to='/AllUsers' className='Navlinkstyle' style={navLinkStyles}>AllUsers</NavLink>
      <p onClick = {()=> {logout()}} className='Navstyle'>Logout</p>
  </div>
  :
  <div className='Navwrapper'>
    <NavLink to='/' className='Navlinkstyle' style={navLinkStyles}>Home</NavLink>
    <NavLink to='/RegistrationUser' className='Navlinkstyle' style={navLinkStyles}>Register</NavLink>
    <NavLink to='/Login' className='Navlinkstyle'style={navLinkStyles}>Login</NavLink>
  {/* <p onClick={() => {navigate('/RegistrationUser')}} className='Navstyle'>Register</p> */}
</div>

    }
       
    </>
  )
}

export default Navbar
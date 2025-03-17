import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function RegistrationUser() {
   const  [loginName,setloginName] = useState("")
   //console.log("The value of name is:",loginName)
   const  [loginEmail,setloginEmail] = useState("")

   const  [loginPassword,setloginPassword] = useState("")

   function handleemail(a){
    setloginEmail(a.target.value)
   }
//    function handlePassword(b){
//     setloginPassword(b.target.value)
//    }
   
   function handleName(e) {
    //console.log(e.target.value)
    setloginName(e.target.value)
   }
   async function handleClick(){
    //console.log("The values are: ", loginName,loginEmail,loginPassword)
    await axios.post("http://localhost:8080/usersave",{loginName,loginEmail,loginPassword})
    .then((res)=>{
      if(res.data === "user info updated"){

        alert("User saved successsfully")
        setloginName("")
        setloginEmail("")
        setloginPassword("")
      }else if(res.data === "something went wrong while saving"){
        alert("User could not be saved")
      }else if (res.data === "Backend error occured"){
        alert("Backend error occured")
      }
      //console.log(res.data)
      })
    .catch((error)=>{
      alert("something went wrong")
      //console.log(error)
    })
   
    //console.log("The values after making blank: ", loginName,loginEmail,loginPassword)
   }

  return (
    <>
    <h1> User Registration </h1>
    <div style={{marginLeft:'20px'}}>
    <div>Name: <input className='inputfield' value= {loginName} onChange={(e)=>{handleName(e)}}/><br></br></div>
    <div>Email: <input className='inputfield' value={loginEmail} onChange={(a)=> {handleemail(a)}}/><br></br></div>
    <div> Password:<input className='inputfield' value={loginPassword} onChange={(b)=>{setloginPassword(b.target.value)}}/></div><br></br>
    <button onClick={handleClick}>Submit</button>

    </div>

    </>
  )
}

export default RegistrationUser
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
    const [useremail,setuseremail] = useState("")
    const [userpassword,setuserpassword] = useState("")
    //console.log(useremail,userpassword)
    async function submit(){
     // console.log(useremail,userpassword)
        await axios.post("http://localhost:8080/login",{useremail,userpassword})
        .then((res)=>{
          //console.log(res.data)
          const response = res.data

          if (response === "User not found")
          {
            alert("User not found, check Email")
          }
          else if(response === "incorrect password" )
          {
            alert("wrong password")
          }
          else if (response.authtoken)
          {
            //alert("loggedin successfully")
            localStorage.setItem("TAuth",JSON.stringify(btoa(response.authtoken)))
            localStorage.setItem("uiAuth",JSON.stringify(btoa(response.id)))
            navigate('/AllUsers')
           //localStorage.clear()
          }
     
        })
        .catch((error)=>{
            alert("something went wrong")
        })
    }

  return (
    <>
    <h1>Login</h1>
    <div>Email:<input type='text' className='inputfield' value={useremail} onChange={(a)=>{setuseremail(a.target.value)}}/></div>
    <div>Password:<input type='password' className='inputfield' value={userpassword} onChange={(b)=>{setuserpassword(b.target.value)}}/></div><br></br>
    <button onClick={submit}>Submit</button>
    
    </>
  )
}

export default Login
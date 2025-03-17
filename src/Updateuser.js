import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


function Updateuser() {
    const  [loginName,setloginName] = useState("")
      
       const  [loginEmail,setloginEmail] = useState("")
    
       const  [loginPassword,setloginPassword] = useState("")
       const [updateUser,setupdateUser] = useState()
       //console.log(updateUser)
       function handleemail(a){
        setloginEmail(a.target.value)
       }

       function handleName(e) {
    
        setloginName(e.target.value)
       }
       const params = useParams()
       console.log(params.id)
       
       const id = params.id

       async function getUser(){
        await axios.get("http://localhost:8080/getsingleuser/"+id)
        .then((res)=>{
            //console.log(res.data)
            //setupdateUser(res.data)
            setloginName(res.data.loginName)
            setloginEmail(res.data.loginEmail)
            setloginPassword(res.data.loginPassword)
        })
        .catch((error)=>{
            alert("something went wrong")
        })
        //await axios.get(`http://localhost:8080/getsingleuser/${id}`)
       }
    useEffect(()=>{
        getUser()
    },[])
    async function update(){
      await axios.put("http://localhost:8080/updateUsers/"+id,{loginName,loginEmail,loginPassword})
      .then((res)=>{
        if (res.data=== "Updated successfully"){
          alert("updated successfully")
          setloginName("")
          setloginEmail("")
          setloginPassword("")
        }else{
          alert("could not save")
        }
        
        console.log(res.data)
      })
      .catch((error)=>{
        alert("something went wrong")
      })

    }

  return (
    <>
    <h1> Update </h1>
    <div style={{marginLeft:'20px'}}>
    <div>Name: <input className='inputfield' value= {loginName} onChange={(e)=>{handleName(e)}}/><br></br></div>
    <div>Email: <input className='inputfield' value={loginEmail} onChange={(a)=> {handleemail(a)}}/><br></br></div>
    <div>Password:<input className='inputfield' value={loginPassword} onChange={(b)=>{setloginPassword(b.target.value)}}/></div>
    <button onClick={()=>{update()}}>Update</button>
  

    </div>

    </>
  )
}

export default Updateuser
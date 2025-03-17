import React, { useState } from 'react'
import '../App.css'
import axios from 'axios';

function Postjob() {
    const [jobTitle,setjobTitle] = useState("")
    const [decription,setdecription] = useState("")
    const [location, setlocation] = useState("")

    async function postnewjob(){
        await axios.post("http://localhost:8080/postjob",{jobTitle,decription,location})
        .then((res)=>{
          if(res.data === "Job posted"){
    
            alert("Job saved successsfully")
            setjobTitle("")
            setdecription("")
            setlocation("")
          }else if(res.data === "something went wrong while saving"){
            alert("job could not be saved")
          }else if (res.data === "Backend error occured"){
            alert("Backend error occured")
          }
          
          })
        .catch((error)=>{
          alert("something went wrong")
          
        })
       
        
       
    }
  return (
    <>
    <h1>Post Job</h1>
    <div style={{marginLeft:'20px'}}>
    <div>JobTitle<input className='inputfield' value={jobTitle} onChange={(a)=>{setjobTitle(a.target.value)}}/></div>
    <div>Decription<input className='inputfield' value={decription} onChange={(b)=>{setdecription(b.target.value)}}/></div>
    <div>Location<input className='inputfield' value={location} onChange={(c)=>{setlocation(c.target.value)}}/></div>
    <button onClick={postnewjob}>Submit</button>
    </div>
    </>
  )

}
export default Postjob
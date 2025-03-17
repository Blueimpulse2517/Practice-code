import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Updatejob() {
   const [jobTitle,setjobTitle] = useState("")
       const [decription,setdecription] = useState("")
       const [location, setlocation] = useState("")
       const [updateJob,setupdateJob] = useState()
       const params = useParams()
       const jobid = params.id

       async function getjobs(){
        await axios.get("http://localhost:8080/getonejob/"+jobid)
        .then((res) => {
            setjobTitle(res.data.jobTitle)
            setdecription(res.data.decription)
            setlocation(res.data.location)
        })
        .catch((error) => {
            alert("something went wrong")
        })
       }
       useEffect(() => {
        getjobs()
       },[])
       async function update(){
      await axios.put("http://localhost:8080/updateJob/"+jobid,{jobTitle,decription,location})
      .then((res) => {
        if (res.data=== "Updated successfully"){
            alert("updated successfully")
            setjobTitle("")
            setdecription("")
            setlocation("")
          }else{
            alert("could not save")
          }
          
          console.log(res.data)
        })
        .catch((error)=>{
          alert("something went wrong")
        })
       }
       return(
        <>
        <hi>Update Job</hi>
        <div style={{marginLeft:'20px'}}>
    <div>JobTitle<input className='inputfield' value={jobTitle} onChange={(a)=>{setjobTitle(a.target.value)}}/></div>
    <div>Decription<input className='inputfield' value={decription} onChange={(b)=>{setdecription(b.target.value)}}/></div>
    <div>Location<input className='inputfield' value={location} onChange={(c)=>{setlocation(c.target.value)}}/></div>
    <button onClick={() => {update()}}>Submit</button>
    </div>
        </>
       )
}
export default Updatejob
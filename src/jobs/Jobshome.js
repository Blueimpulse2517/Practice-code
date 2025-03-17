import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Alljobs(){
    const nav = useNavigate()
    const [alljobs,setalljobs] = useState([])

    async function getjobs(){
        axios.get("http://localhost:8080/getjobs")
        .then((res)=>{
        let sortedData=res.data.sort((a,b)=>{
        return(
          new Date (b.createdAt)-new Date (a.createdAt)
        )
        })
        setalljobs(sortedData)
        
           })
           .catch(()=>{
             console.log("error occured")
           })
          }
         useEffect(()=>{
          getjobs()
         },[])
         async function deletejob(jobid){
          await axios.delete("http://localhost:8080/deletejob/"+jobid)
          .then((res)=>{
            console.log(res.data)
            if(res.data==="deleted successfully")
            {
             
              getjobs()
            }
          
          })
          .catch((error)=>{
            //console.log(error)
            alert("something went wrong")
          })
         }
         function ascendingOrder() {
          let newJObs = [...alljobs]
           const AscendSort = newJObs.sort(function (a, b) {
             return (
               new Date (a.createdAt) - new Date (b.createdAt)
             )
           })
          
           setalljobs(AscendSort)
        }
         return (
            <>
            <button onClick={()=>{ascendingOrder()}}>Ascending</button>
             <table border="1" style={{borderCollapse:"collapse",width:"95%",textAlign:"center"}}>
                    <thead>
                      <tr>
                        <th>JobTitle</th>
                        <th>JobDescription</th>
                        <th>Location</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th>PostedDate</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                      alljobs.map((job,i)=>{
                        return(
                          <>
                          <tr>
                            <td>{job.jobTitle}</td>
                            <td>{job.decription}</td>
                            <td>{job.location}</td>
                            
                   <td><button onClick={()=>{nav("/UpdateJob/"+job._jobid)}}>Update</button></td>
                   <td><button onClick={()=>{
          deletejob(job._jobid)
          }}>Delete</button></td>
          <td>{new Date(job.createdAt).toLocaleString("en-US",{
                    //month:"short",day:"2-digit",year:"numeric"
                  })}</td>
                  
                          </tr>
                          </>
                        )
                      })
                     }
                    </tbody>
                  </table>
           
            </>
          )
        }
        
        export default Alljobs
    

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Allusers() {
      const moveto = useNavigate()
  
const [allUsers,setallUsers] = useState([])
 //console.log(allUsers)
 let id = atob(JSON.parse(localStorage.getItem('uiAuth')))
 let token = atob(JSON.parse(localStorage.getItem('TAuth')))
//  const headers = { authorization: userid + " " + atob(JSON.parse(localStorage.getItem("StudLog"))) };
//  await axios.get("/jobpost/getjobs", { headers })
 //console.log(id)
  async function getUsers(){ 
    const headers = {authorization: id +" "+ token}
   await axios.get("http://localhost:8080/getUsers",{headers})
    .then((res)=>{
      console.log(res.data)
let sortedData=res.data.sort((a,b)=>{
return(
  new Date (b.createdAt)-new Date (a.createdAt)
)
})
setallUsers(sortedData)

   })
   .catch((error)=>{
     console.log("error occured")
   })
  }
 useEffect(()=>{
  getUsers()
 },[])
async function deleteUser(id){
console.log(id)
await axios.delete("http://localhost:8080/deleteUser/"+id)
.then((res)=>{
  console.log(res.data)
  if(res.data==="deleted successfully")
  {
   
    getUsers()
  }

})
.catch((error)=>{
  //console.log(error)
  alert("something went wrong")
})
}

  return (
    <>
     <table border="1" style={{borderCollapse:"collapse",width:"95%",textAlign:"center"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Date</th>
                <th>Delete</th>
                <th>Update</th>

              </tr>
            </thead>
            <tbody>
             {
              allUsers.map((user,i)=>{
                return(
                  <>
                  <tr>
                    <td>{user.loginName}</td>
                    <td>{user.loginEmail}</td>
                    <td>{user.loginPassword}</td>
                    <td>{new Date(user.createdAt).toLocaleString("en-US",{
            //month:"short",day:"2-digit",year:"numeric"
          })}</td>
          <td><button onClick={()=>{
          deleteUser(user._id)
          }}>Delete</button></td>
          <td><button onClick={()=>{moveto("/UpdatePage/"+user._id)}}>Update</button></td>
                    
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

export default Allusers
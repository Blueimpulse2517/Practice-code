import React from 'react'

function Page1() {
    const navigate = useNavigate()
  const [initialvalue,setinitialvalue] = useState(0)
  //const [decrease,setdecrease]= useState(10)
  const [value,setvalue] = useState(true)
 
  // const a=1
  function Change(){
    setinitialvalue((prev)=> prev+1)
  }
  function decrement(){
    setinitialvalue((prev)=> prev-1)
  // setdecrease((prev) => prev-1)
  }
  function changevalue(){
    setvalue((prev)=>!prev)
  }
  function Gotoalljobs(){
    navigate("/Alljobs")
  }
  
  return (
    <>
    <Link to="/Profile">Goto Profile</Link>
     {/* <p onClick={()=>{Gotoalljobs()}}>Alljobs</p> */}
     {/* <p onClick={Gotoalljobs}>Alljobs</p> */}
     <p onClick={()=>{navigate("/Alljobs")}}>Alljobs</p>
     
     <p>The value of props in Home is = {a}</p><br></br>
     <button onClick={()=> {Change()}}>increment</button>
     <span>{initialvalue}</span>
     <button onClick={() => {decrement()}}>Decrement</button><br></br><br></br>
     <button onClick={() => {changevalue()}}>ChangeValue</button>
    {
      !value ? 
      <p>False</p>
      :
      <p>True</p>

    } 
     <About b={a}/>
    
    <div>Page1</div>
    </>
  )
}

export default Page1
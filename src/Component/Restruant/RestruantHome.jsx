import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const RestruantHome = () => {
    let {state}=useLocation()
    let restruant=state?.data?.restruant
    let token=state?.data?.token
   console.log(restruant,token);
   let [resHome,setResHome]=useState([])
   useEffect(()=>{
    setResHome(restruant);
    console.log(resHome);
    if(token){
      window.localStorage.setItem("token",token);
    }},[]);
    
  return (
    
    <div>
      <div>
        <h1>Restruant Home</h1>
      </div>
     <Link to="/addMenu" state={{restruant,token}}><button>Add Menu</button></Link>
    </div>
  )
}

export default RestruantHome

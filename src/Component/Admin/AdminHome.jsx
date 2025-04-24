import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { service } from '../Services/Services'

const AdminHome = () => {
  let {state:{user:{pending},token}}=useLocation()
 let [adminDetails,setAdminDetails]=useState([])
 console.log(pending);
 
 useEffect(()=>{
  setAdminDetails(pending)
  },[])
  let handleAccept=(id)=>{
    console.log(id);
    (async()=>{
      let {adminDetails:{pending}}=await service.addRestruant(id,token)
      setAdminDetails(pending)
    })()
  }
  let handleReject=(id)=>{
    console.log(id);
    (async()=>{
      let {adminDetails:{pending}}=await service.deleteRestruan(id,token)
      setAdminDetails(pending)
    })()
  }
  return (
    <div>
     {
      pending.map((val)=>{
        return (<div key={val_id}>
          <div><samp>Email:</samp>{val.email}</div>
          <div><samp>UserName:</samp>{val.username}</div>
          <div><samp>phone:</samp>{val.phone}</div>
          <div><samp>Plot:</samp>{val.address.plot}</div>
          <div><samp>City:</samp>{val.address.city}</div>
          <div><samp>Landmark:</samp>{val.address.landmark}</div>
          <div>
            <button onClick={()=>{
              handleAccept(val._id)
            }}>Accept</button>
          </div>
          <div>
            <button onClick={()=>{
              handleReject(val._id)
            }}>reject</button>
          </div>

        </div>
          
        )
      }
    )
    }
    </div>

  )
}

export default AdminHome

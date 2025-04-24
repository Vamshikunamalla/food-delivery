import React from 'react'
import { useLocation } from 'react-router-dom';
import { service } from '../Services/Services';

const CeoHome = () => {
  let {state:{pending}}=useLocation()
  console.log(pending);
let handleAccept=(id)=>{
  service.addAdmin(id)
}
  return (
    <div>
      {
      pending. map((val)=>{
        return (<div key={val._id}>
          <div><samp>Email:</samp>{val.email}</div>
          <div><samp>UserName:</samp>{val.UserName}</div>
          <div><samp>phone</samp>{val.phone}</div>
          <div><samp>plot:</samp>{val.plot}</div>
          <div><samp>city:</samp>{val.city}</div>
          <div><samp>Landmark:</samp>{val.landmark}</div>
          <div>
            <button onClick={()=>{
              handleAccept(val._id)
            }}>Accept</button>
          </div>
          <div>
            <button>Reject</button>
          </div>
        </div>
      )})
    }
     
    </div>
  )
}

export default CeoHome

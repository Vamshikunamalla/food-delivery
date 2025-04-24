import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { service } from '../Services/Services';
import styles from './CeoHome.module.css'
const CeoHome = () => {
  let {state:{ceo:{pending},token}}=useLocation()
 let[ceoDetails,setceoDetails]=useState([])

 useEffect(()=>{
  setceoDetails(pending)
 },[])
  
 let handleAccept=(id)=>{
    console.log(id);
    (async()=>{
    let {ceoDetails:{pending}}=await service.addAdmin(id,token)
    setceoDetails(pending)
  })()
 
 }


 let handleReject=(id)=>{
  console.log(id);
  (async()=>{
  let {ceoDetails:{pending}}=await service.deleteAdmin(id,token)
  console.log(data);
  setceoDetails(pending)
})();
 }


  return (
    <div className={styles.Container}>
      {
      ceoDetails. map((val)=>{
        return (<div key={val._id} >
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
            <button  onClick={()=>{
              handleReject(val._id)
            }}>Reject</button>
          </div>
        </div>
      )})
    }
     
    </div>
  )

}
export default CeoHome

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CeoResistarion.module.css'
import { service } from '../Services/Services';
const CeoResistarion = () => {
    let {state}=useLocation()
    let navigate=useNavigate()
    console.log(state);
    let{email,role}=state
    let handleNo=()=>{
        navigate('/')
    }
    let handleYes=()=>{
        service.CeoResistarion(state)
        navigate ("/login")
    }   
  return (
    <div className={styles.cardContant}>
     <form action="">
     <h1> Are you sure to Resistarion as CEO</h1>
     <h2><samp>Email: </samp>{email}</h2>
     <h3><samp> Role: </samp>{role}</h3>
     <button onClick={handleYes}>Yes</button>
     <button onClick={handleNo}>No</button>
     </form>
    </div>
  )
}

export default CeoResistarion

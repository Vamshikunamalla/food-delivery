import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { service } from '../Services/Services';
import styles from './UserResistarion.module.css'

const UserResistarion = () => {
  let {state}=useLocation()
  let navigate =useNavigate()
  // console.log(state);/-
  let[UserDetalis,setUserDetalis]=useState({
    username:"",
    plot:"",
    city:"",
    landmark:"",
    phone:""
  })
  let handleChange=(e)=>{
    let {name,value}=e.target
    setUserDetalis((prev)=>({...prev,[name]:value}))
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    let {username,plot,city,landmark,phone}=UserDetalis
    let {email,password,role}=state
    let payload={
      email,
      password,
      username,
      role,
      phone,
     address:{
      plot,
      city,
      landmark
     }
    }
    console.log(payload);
    service.UserResistarion(payload)
    navigate('/Login')
  }
let {role}=state
let {username,plot,landmark,city,phone}=UserDetalis

  return (
    <div className={styles.formbox}>
      <form action="" onSubmit={handleSubmit} className={styles.form}> 
        <div>
          <h1>{state.role}Resistarion</h1>
        </div>
        <div>
          <label htmlFor="">UserName :</label>
          <input type="text" placeholder='Enter UserName' name='username'  value={username}  onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="">Plot :</label>
          <input type="text" placeholder='Enter PlotNumber' name='plot'value={plot}  onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">City :</label>
          <input type="text" placeholder='Enter City'name='city' value={city}  onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="">Landmark :</label>
          <input type="text" placeholder='Enter Landmark'name='landmark'value={landmark}  onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">phone :</label>
          <input type="text" placeholder='Enter phone'name='phone'value={phone}  onChange={handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default UserResistarion

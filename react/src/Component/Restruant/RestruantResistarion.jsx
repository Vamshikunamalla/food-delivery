import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Styles from './RestruantResistarion.module.css'
import { service } from '../Services/Services'
const RestruantResistarion = () => {
    let {state}=useLocation()
    // console.log(state);
    let navigate=useNavigate()
    let[locat,setlocat]=useState([])
useEffect(()=>{
  window.navigator.geolocation.getCurrentPosition((location)=>{
    setlocat([location.coords.longitude,location.coords.latitude])
  })
},[])
    let [restDetails,setRestDetails]=useState({
      name:"",
      description:"",
      plot:"",
      city:"",
      landmark:"",
      phone:"",
      openingHours:"",
      closingHours:""
    })
    let handleChange=(e)=>{
      let {name,value}=e.target
      setRestDetails((prev)=>({...prev,[name]:value}))
    }
    let handleSubmit=(e)=>{
      e.preventDefault()
      let {name,description,plot,city,landmark,phone,openingHours,closingHours}=restDetails
      let {email,password}=state
      let [longitude,latitude]=locat
      let payload={
        email,
        password,
        name,
        phone,
        openingHours:`${openingHours}-${closingHours}`,
        description,
        address:{
          plot,
          city,
          landmark
        },
        location:{
          coordinates:`${longitude}-${latitude}`
        }
      }
      console.log(payload);
      service.RestruantResistarion(payload)
      navigate('/login')
    }
     
    let{name,description,plot,landmark,city,phone,openingHours,closingHours}=restDetails
  return (
    <div className={Styles.formbox}>
    <form action="" onSubmit={handleSubmit}>
    <div>
    <h1>RestruantResistarion</h1>
    </div>
    <div>
    <label htmlFor="">RestruantName :</label>
    <input type="text" placeholder='Enter the RestruantName' name='name'onChange={handleChange} value={name} />
    </div>
    <div>
    <label htmlFor="">Description :</label>
    <input type="text" placeholder='Enter the Description' name='description' onChange={handleChange}value={description} />
    </div>
    <div>
    <label htmlFor="">Plot :</label>
    <input type="text" placeholder='Enter the Plot' name='plot'onChange={handleChange}value={plot}/>
    </div>
    <div>
    <label htmlFor="">City :</label>
    <input type="text" placeholder='Enter the City' name='city' onChange={handleChange} value={city}/>
    </div>
    <div>
    <label htmlFor="">Landmark :</label>
    <input type="text" placeholder='Enter the Landmark' name='landmark' onChange={handleChange}value={landmark}/>
    </div>
    <div>
    <label htmlFor="">Phone :</label>
    <input type="text" placeholder='Enter the Phone' name='phone'onChange={handleChange} value={phone} />
    </div>
    <div>
    <label htmlFor="">Opening And Closing Hours:</label>
    <div>
    <input type="time" name='openingHours' onChange={handleChange}value={openingHours}/> 
    <input type="time"  name='closingHours'onChange={handleChange}vavalue={closingHours}/>  
    </div>
    </div>
    <div>
    <button type='submit'>submit</button>  
    </div>
    </form>
    </div>
  )
}

export default RestruantResistarion
import React, { useState } from 'react'
import styles from './CommonResistarion.module.css'
import { useNavigate } from 'react-router-dom'
import { service } from '../Services/Services'
const CommonLogin = () => {
 let navigate=useNavigate()
 let [state,setState]=useState({
  email:'',
  password:'',
  role:''
 })
 let hansdleNavigate= async(role,payload)=>{
  console.log(role);
  
  switch(role){
   case 'ceo':
    (async()=>{
      let {ceo,token}=await service.ceoLogin(payload)
      console.log(ceo);
      navigate('/ceohome',{state:{ceo,token}})
    })();
    return;
    case 'admin':
      (async()=>{
      let data=await service.adminLogin(payload)
      console.log(data);
      navigate('/adminhome',{state:data})
     
    })();
    return;
    case 'resturuant':
      (async()=>{
      let data=await service.RestruantLogin(payload)
      console.log(data);
      navigate('/resturanthome',{state:{data}})
      console.log(data);
    })();
    return;
    case 'user':
      (async()=>{
      let data=await service.UserLogin(payload)
      console.log(data);
      navigate('/userhome',{state:data})
    })();
    return;
  }
 }
  let handleChange=(e)=>{
 let{name,value}=e.target
 setState({
  ...state,[name]:value
 })
 }
 let handleSubmit=(e)=>{
  e.preventDefault()
  console.log(state);
  let {email,password,role}=state
  let payload={
    email,
    password,
    role
  }
  hansdleNavigate(state.role,payload)
  console.log(state.role);
  
 }
 let{email,password}=state

  return (
    <div className={styles.formbox}>
      <form action="" onSubmit={handleSubmit}>
        <div><h1>Login from</h1></div>
        <div>
          <label htmlFor="">Email :</label>
          <input type="email" name="email"  placeholder='Enter the Email' value={email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="">Password :</label>
          <input type="password" name="password" placeholder='Enter the Password' value={password} onChange={handleChange} />
        </div>
        <div>
          <select name='role' onChange={handleChange}>
            <option value="select option">select option</option>
            <option value="ceo"  name='role'>CEO</option>
            <option value="admin" name='role'>ADMIN</option>
            <option value="user" name='role'>USER</option>
            <option value="resturuant" name='role'>RESTURUANT</option>
          </select>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default CommonLogin

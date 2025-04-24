import React, { useState } from 'react'
import styles from './CommonResistarion.module.css'
import { useNavigate } from 'react-router-dom'
import { service } from '../Services/Services'
import toast from 'react-hot-toast'
const CommonLogin = () => {
 let navigate=useNavigate()
 let [state,setState]=useState({
  email:'',
  password:'',
  role:''
 })
 let hansdleNavigate=(role,payload)=>{
//   console.log(role);
  // console.log(role);
  
  switch(role){
   case 'ceo':
(async()=>{
  let ceo=await service.ceoLogin(payload);
  console.log(ceo);
  // navigate('/ceoHome',{state:ceo})
  navigate("/ceoHome",{state:ceo})
  // if(ceo){
  //   navigate('/ceohome',{state:ceo})
  // }else{
  //   toast.error("something went wrong")
  // }
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
  let payload={email,password}
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

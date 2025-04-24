import React, { useState } from 'react'
import styles from './CommonResistarion.module.css'
import { useNavigate } from 'react-router-dom'
const CommonResistarion = () => {
 let navigate=useNavigate()
 let [state,setState]=useState({
  email:'',
  password:'',
  role:''
 })
 let hansdleNavigate=(role)=>{
  console.log(role);
  
  switch(role){
   case 'ceo':
    navigate('/ceoresistarion',{state:state})
    break;  
    case 'admin':
    navigate('/adminresistarion',{state:state})
    break;  
    case 'user':
    navigate('/userresistarion',{state:state})
    break;  
    case 'resturuant':
    navigate('/resturantresistarion',{state:state})
    break;
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
  hansdleNavigate(state.role)
  console.log(state.role);
  
 }
 let{email,password}=state

  return (
    <div className={styles.formbox}>
      <form action="" onSubmit={handleSubmit}>
        <div><h1>Resistarion from</h1></div>
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

export default CommonResistarion

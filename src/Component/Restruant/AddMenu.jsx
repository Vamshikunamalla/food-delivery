import React, { use, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { service } from '../Services/Services'
const AddMenu = () => {
let {state}=useLocation()
let navigate =useNavigate()
let restruant=state?.restruant
let token=state?.token
console.log(restruant,token);
let[AddMenu,setAddMenu]=useState({
  name:'',
  description:'',
  price:'',
  category:'',
  image:'',
  available:''
})
useEffect(()=>{
  setAddMenu(AddMenu)
},[])

  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(state)
    let {name,description,price,category,image,available}=AddMenu
    let payload={
      name,
      description,
      price,
      category,
      image,
      available
    }
    (async()=>{
      let {data:{AddMenu,token}}=await service.ADdMenu(payload,token);
      console.log(AddMenu);

    })();
    navigate('/resturanthome',{state:{restruant:{AddMenu}}});
  }
  
  let handleChange=(e)=>{
    let {name,value}=e.target
    setAddMenu((prev)=>({...prev,[name]:value}))
  }
  let {name,description,price,category,image,available}=AddMenu
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
        <h1>Menu</h1>
        <div>
          <label htmlFor="">Name :</label>
          <input type="text" placeholder='Enter the Name' name='name' onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="">Description :</label>
          <input type="text" placeholder='Enter the description' name='description'  onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="">Price :</label>
          <input type="Number" placeholder='Enter the price' name='price' onChange={handleChange}/>
        </div>
        <div>
        <label>Category:</label>
          <select name="category" value={category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="meals">Meals</option>
            <option value="breakfast">Breakfast</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input type="url" name="image" onChange={handleChange} />
        </div>
        <div>
        <label>Available:</label>
          <input type="radio" name="available" value="yes" onChange={handleChange} /> <samp>Yes</samp>
          <input type="radio" name="available" value="no" onChange={handleChange} /> <samp>No</samp>
        </div>
        <div>
          <button>Submit</button>
        </div>
       </form>
    </div>
  )
}

export default AddMenu

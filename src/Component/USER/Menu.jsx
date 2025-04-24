import React, { use, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { service } from '../Services/Services'

const Menu = () => {
  let {state}=useLocation()
  let[allMenu,setAllMenu]=useState([])
  let[cart,setCart]=useState([])
  let[menuId,setMenuId]=useState([])
  let navigator=useNavigate()
  let handleAdd=(id,val)=>{
    console.log(id,val);
    setCart(cart+1)

    let filteredData=allMenu.filter((val)=>val._id===id)
    console.log(filteredData);
    let clikedData=filteredData.map((val)=>({...val,isCliked:true}))
  
  console.log(clikedData);
  let arr=[]
  for(let i=0;i<allMenu.length;i++){
    for(let j=0;j<clikedData.length;j++){
      if(allMenu[i]._id===clikedData[j]._id){
       arr.push({...allMenu[i],...clikedData[j]})
      }
    }
  }
  arr.push({...val,isCliked:false})
  console.log(arr);
  setAllMenu(arr)
  setMenuId(id)
  }

  let handlSub=()=>{
    if(cart>0){
      setCart(cart-1)
    }
  }
  useEffect(()=>{
    setAllMenu(state.menu)
  },[])
 let handleClick=()=>{
  let payload={
    quantity:cart
  };
  (async()=>{
    let data=await service.addTocart(state._id,menuId,payload,window.sessionStorage.getItem("token"))
    console.log(data.cart[0].items);
    let items=data.cart[0].items
    navigator("/cart",{state:{data}})
  })()
 }
  return (
    <div>
      <div>
          {
            allMenu.length? allMenu.map((val)=>{
              return 
              <div key={val._id}>
                <p><samp>Name:</samp>{val.name}</p>
                <p><samp>Description:</samp>{val.description}</p>
                <p><samp>Catagory:</samp>{val.catagory}</p>
                <p><samp>Price:</samp>{val.price}</p>
                <img src={val.img} alt="" />
                <div>
                  <button onClick={(e)=>{
                    handleAdd(val._id,val)
                  }} disabled={val.isCliked}>+</button>
                  <button onClick={handlSub}>-</button>

                </div>
              </div>
            }):<h1>No Items Present</h1>
          }
      </div>
    </div>
  )
}

export default Menu

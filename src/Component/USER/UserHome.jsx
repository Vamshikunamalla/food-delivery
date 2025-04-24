import React, { use, useEffect, useState } from 'react'
import { data, Link, useLocation, useNavigate } from 'react-router-dom'
import { service } from '../Services/Services'
import { FaStar } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const UserHome = () => {
    let {state}=useLocation()
    let {token}=state
    let[userres,setUserRes]=useState([])
    let[cartlenth,setCartLenth]=useState([])
console.log(token);
    function giveStars(val){
        let arr=[]
        for(let i=0;i<val;i++){
            arr.push(<FaStar />
            )
        }
        return arr
    }

    useEffect(()=>{
   sessionStorage.setItem("token",token)
   if(window.sessionStorage.getItem("token")){
    (async()=>{
        let data= await service.getResturant(window.sessionStorage.getItem("token"))
        console.log(data);
        if(data){
            setUserRes(data.cityRestuant)
        }
    })()}
    let x=state.data.user.cart.map((val)=>val.items.map((val)=>val.quantity))
    setCartLenth(x.redu=ce((acc,cuur)=>{
        return acc=cuur+acc
    }))
    },[])
  console.log(userres)
  return (
    <div>
        <nav>{<FaCartShopping />}
        <div>{cartlenth}</div>
        </nav>
        {
           userres.length?userres.map((val)=>{
                return(
                    <div key={val._id}>
                        <h1>Name: {val.name}</h1>
                        <h2>Description: {val.description}</h2>
                        <h2>plot No: {val.address.plot}</h2>
                        <h2>Landmark: {val.address.landmark}</h2>
                        <h2>City: {val.address.city}</h2>
                        <h2>Phone: {val.phone}</h2>
                        <div>
                            <h2>Opening Hours: {val.openingHours.split("-")[0]}</h2>
                            <h2>Closing Hours: {val.openingHours.split("-")[1]}</h2>
                        </div>
                        <div>
                            <h2> Ratings: {giveStars(val.rating).map((vam,inde)=><samp key={inde}>{vam}</samp>)}</h2>
                        </div>
                        <Link to={"/menu"} state={val}><button> View Menu</button></Link>
                        
                    </div>
                )
            }):<h1>Something went wrong</h1>
        }
    
    </div>
  )

}


export default UserHome

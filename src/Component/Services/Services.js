import axios from "axios";
import CeoResistarion from "../CEO/CeoResistarion";
import toast from "react-hot-toast";
import { axiosApi } from "../Axiosinsancs/Axiosinsancs";
import UserResistarion from "../USER/UserResistarion";
import AdminHome from "../Admin/AdminHome";
import RestruantResistarion from "../Restruant/RestruantResistarion";

import RestruantHome from "../Restruant/RestruantHome";
import { data } from "react-router-dom";
import AddMenu from "../Restruant/AddMenu";


export let service={
    CeoResistarion:async(payload)=>{
        console.log(payload);
    // let data= await axios.post(/ceo/register',payload)
    // console.log(data);
        
        // console.log("hiii");
       try {
        let data=await axiosApi.post("/ceo/register",payload)
        console.log(data);
       } catch (error) {
        console.log(error);
        toast.error(`${error.response.data.message}`)
       }
    },
    UserResistarion:async(payload)=>{
        console.log(payload);
        // let data= await axiosApi.post('/auth/register',payload)
        // console.log(data);
        try {
            let data= await axiosApi.post('/auth/register',payload)
        console.log(data);
        toast.success("User Resistarion SuccessFully")
        } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`)   
        }
    },
    RestruantResistarion:async(payload)=>{
        console.log(payload);
        // let data= await axiosApi.post('/resturant/register',payload)
        // console.log(data);
        try {
            let data= await axiosApi.post('/restruant/register',payload)
        console.log(data);
        toast.success("Resturant Resistarion SuccessFully")
        } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`)
        }
    },
    ceoLogin:async(payload)=>{
        console.log(payload);
        try {
            let {data}= await axiosApi.post('/ceo/login',payload)
        console.log(data)
        toast.success("Ceo Login SuccessFully")
    return data
    }
        catch (error) {
            console.log(error);
            if(error.status==400){
                toast.error(`${error.response.data.message}`)
            }else{
                toast.error("Something went wrong")
            }
        }   
    },addAdmin:async(id,token)=>{
        console.log(id,token);
    
            let {data}= await axiosApi.get(`/ceo/addAdmin/${id}`,{
         headers: {
            "Authorization": `Bearer ${token}`
    }})
        console.log(data);
       return data
    },deleteAdmin:async(id,token)=>{
        console.log(id,token);
    
            let {data}= await axiosApi.delete(`/ceo/removeAdmin/${id}`,{
         headers: {
            "Authorization": `Bearer ${token}`
    }})
        console.log(data);
       return data
    },
    adminLogin:async(payload)=>{
        console.log(payload);
        try {
            let {data}= await axiosApi.post('/auth/login',payload)
            console.log(data);
        return data
            
        }catch (error) {
            console.log(error);
            if(error.status==400){
                toast.error(`${error.response.data.message}`)
            }else{
                toast.error("Something went wrong")
            }
        }
      

    },addRestruant:async(id,token)=>{
        console.log(id,token);
    
            let {data}= await axiosApi.get(`/auth/addRestruant/${id}`,{
         headers: {
            "Authorization": `Bearer ${token}`
        
    }})

        console.log(data);
       return data;
    },deleteRestruant:async(id,token)=>{
        console.log(id,token);
        

            let {data}= await axiosApi.delete(`/ceo/removeRestruant/${id}`,{
         headers: {
            "Authorization": `Bearer ${token}`
    }})
        console.log(data);
         return data;
        
    },
    RestruantLogin:async(payload)=>{
     console.log(payload);
     try {
            let {data}= await axiosApi.post('/restruant/login',payload)
        return data;

     }catch (error) {
            console.log(error);
            if(error.status==400){
                toast.error(`${error.response.data.message}`)
            }else{
                toast.error("Something went wrong")
            }
        }
        
    },ADdMenu:async(payload,token)=>{
        console.log(payload,token);
        try {
            let {data}= await axiosApi.post('/restruant/addMenu',token,payload,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }})
        // console.log(data);
        return data;

            }catch (error) {
                    console.log(error);
                    if(error.status==400){
                        toast.error(`${error.response.data.message}`)
                    }else{
                        toast.error("Something went wrong")
                    }
                }
            },
        UserLogin:async(payload,token)=>{  
            try {
                let {data}= await axiosApi.post('/auth/login',payload,token,{
                    headers:{
                        "Authorization":`Bearer ${token}`
                    }
                })
                return data;
                console.log(data);
            } catch (error) {
                if(error.status==400){
                    toast.error(`${error.response.data.message}`)
                }else{
                    toast.error("Something went wrong")
                }
                console.log(error);
            }
            
        },
        getResturant:async(token)=>{
            console.log(token);
            try {
                let {data}= await axiosApi.get('/auth/getRestruant',{
                    headers:{
                        "Authorization":`Bearer ${token}`
                    }
                })
                console.log(data);
                
                return data;
            } catch (error) {
                console.log(error);
                if(error.status==400){
                    toast.error(`${error.response.data.message}`)
                }else{
                    toast.error("Something went wrong")
                }
            }
        },
        addTocart:async(restid,menuId,payload,token)=>{
            let {data}= await axiosApi.post(`/restruant/addToCart/${restid}/${menuId}`,payload,{
                headers:{
                    "Authorization":`Bearer ${token}`
              }      })
            console.log(data);
            return data;
        }

}
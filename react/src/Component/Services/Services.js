import axios from "axios";
import CeoResistarion from "../CEO/CeoResistarion";
import toast from "react-hot-toast";
import { axiosApi } from "../Axiosinsancs/Axiosinsancs";
import UserResistarion from "../USER/UserResistarion";
import RestruantResistarion from "../Restruant/RestruantResistarion";


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
            if(error.response.status==400){
                toast.error(`${error.response.data.message}`)
            }else{
                toast.error("Something went wrong")
            }
        }   
    }
}
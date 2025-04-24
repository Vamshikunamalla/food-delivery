import axios from "axios"

let BaseUrl="http://192.168.0.104:5000/api"

 export let axiosApi=axios.create({
baseURL:BaseUrl
})
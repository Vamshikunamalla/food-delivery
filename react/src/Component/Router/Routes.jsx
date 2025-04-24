import { createBrowserRouter } from "react-router-dom";
import CommonResistarion from "../Common/CommonResistarion";
import UserResistarion from "../USER/UserResistarion";
import CeoResistarion from "../CEO/CeoResistarion";
import RestruantResistarion from "../Restruant/RestruantResistarion";
import CommonLogin from "../Common/CommonLogin";
import CeoHome from "../CEO/CeoHome";
 export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<CommonResistarion></CommonResistarion>
        },
        {
            path:'/ceoresistarion',
            element:<CeoResistarion></CeoResistarion>
        },
        {
            path:'/userresistarion',
            element:<UserResistarion></UserResistarion>
        },
        {
            path:'/adminresistarion',
            element:<UserResistarion></UserResistarion> 
       },
       {
        path:'/login',
        element:<CommonLogin></CommonLogin>
       },
       {
        path:'/resturantresistarion',
        element:<RestruantResistarion></RestruantResistarion>
       },
       {
        path:'/ceoHome',
        element:<CeoHome></CeoHome>
       }
    ]
 )
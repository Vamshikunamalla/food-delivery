import { createBrowserRouter } from "react-router-dom";
import CommonResistarion from "../Common/CommonResistarion";
import UserResistarion from "../USER/UserResistarion";
import CeoResistarion from "../CEO/CeoResistarion";
import RestruantResistarion from "../Restruant/RestruantResistarion";
import CeoHome from "../CEO/CeoHome";
import AdminHome from "../Admin/AdminHome";
import RestruantHome from "../Restruant/RestruantHome";
import CommonLogin from "../Common/CommonLogin";
import AddMenu from "../Restruant/AddMenu";
import Menu from "../USER/Menu";
import UserHome from "../USER/UserHome";
import Cart from "../USER/Cart";



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
        path:'/resturantresistarion',
        element:<RestruantResistarion></RestruantResistarion>
       },
       {
        path:'/ceohome',
        element:<CeoHome></CeoHome>
       },
       {
        path:'/adminhome',
        element:<AdminHome></AdminHome>
       },
       {
        path:'/resturanthome',
        element:<RestruantHome></RestruantHome>,
       },{
        path:'/addMenu',
        element:<AddMenu></AddMenu>
       },
        {
        path:'/login',
        element:<CommonLogin></CommonLogin>
       },
       {
        path:'/userhome',
        element:<UserHome></UserHome>
       },
       {
        path:'/menu',
        element:<Menu></Menu>
       },
       {
        path:'/cart',
        element:<Cart></Cart>
       }
    ]
 )
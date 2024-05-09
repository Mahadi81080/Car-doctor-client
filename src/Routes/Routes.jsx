 
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/singUp',
            element:<SingUp></SingUp>
        },
        {
            path:'/checkOut/:id',
            element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
            loader:({params})=>fetch(`https://car-doctor-server-gray-mu.vercel.app/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }
      ]
    },
  ]);
  export default router
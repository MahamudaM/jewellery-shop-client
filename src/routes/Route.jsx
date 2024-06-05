import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Regiester from "../pages/Register";

// import PrivateRoute from "./PrivateRoute";
import AddJewellary from "../pages/AddJewellary";
// import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/Login";
import JewelleryDetails from "../pages/JewelleryDetails";
import UpdateJewellry from "../pages/UpdateJewellry";

// import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
              path:'/',
              element:<Home></Home>,
              loader:()=>fetch('https://jewellery-shop-client-server.vercel.app/jewellerys')
              
            },
            {
              path:'/jewellerys/:id',
              element:<JewelleryDetails></JewelleryDetails>,
              loader:({params})=>fetch(`https://jewellery-shop-client-server.vercel.app/jewellerys/${params.id}`)          
              
            },
            {
                path:'/login',
                element:<Login></Login>
                
              },
              {
                path:'/regiester',
                element:<Regiester></Regiester>
                
              },
              {
                path:'/addJewellary',
                element:<AddJewellary></AddJewellary>,
               },
             {
              
              path:'/updateJewellery/:id',
              element:<UpdateJewellry></UpdateJewellry>,
              loader:({params})=>fetch(`https://jewellery-shop-client-server.vercel.app/updateJewellerys/${params.id}`)  
             }
              
        ]
    },
    // {
    //   path:'/dashboard',
    //   element:<DashboardLayout></DashboardLayout>,
    // //   errorElement:<ErrorPage></ErrorPage> <PrivateRoute>,
    //   children:[
    //    {
    //     path:'/dashboard/addJewellary',
    //     element:<AddJewellary></AddJewellary>,
    //    },
      
       
       
    //   ]
      
    // },
 
])
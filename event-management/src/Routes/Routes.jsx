
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";

import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import About from "../Pages/About/About";
import Webinarss from "../Pages/Webinar/Webinarss";
import WebinarDetails from "../Pages/Webinar/WebinarDetails";
import PrivateRoutes from "./PtivateRoutes";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";
import Blog from "../Pages/Blog/Blog";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            // loader: () => fetch('/eduCategory.json')
        },
        {
            path: '/category/:id',
            element: <PrivateRoutes> <SeeDetails></SeeDetails> </PrivateRoutes>,
            loader: () => fetch('eduCategory.json')
        },
        
        {
            path:'/webinar',
            element: <Webinarss></Webinarss>,
            
        },
        {
            path: '/webinar/:id',
            element: <WebinarDetails></WebinarDetails>,
            loader: () => fetch('Webinars.json')
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog/:id',
            element: <Blog></Blog>,
            loader: () => fetch('/blog.json')
        },
        {
            
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);



export default router;
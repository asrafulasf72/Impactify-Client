import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import UpcomingEvents from "../Pages/UpcomingEvents";
import LogIn from "../Components/Auth/LogIn";
import Register from "../Components/Navbar/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/Upcoming-Events",
                element:<UpcomingEvents></UpcomingEvents>
            },
            {
                path:"/login",
                element:<LogIn />
            },
            {
                path:"/register",
                element:<Register />
            }

        ]
    }
])
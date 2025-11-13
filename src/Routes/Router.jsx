import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import UpcomingEvents from "../Pages/UpcomingEvents";
import LogIn from "../Components/Auth/LogIn";
import Register from "../Components/Navbar/Register";
import CreateEvent from "../Pages/CreateEvent";
import PrivateRouter from "./PrivateRouter";
import EventDetails from "../Pages/EventDetails";

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
                element:<UpcomingEvents></UpcomingEvents>,
                loader: ()=> fetch("http://localhost:3000/event")
            },
            {
                path:"/login",
                element:<LogIn />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/create-event",
                element:<PrivateRouter><CreateEvent /></PrivateRouter>
            },
            {
                path:"/event-details/:id",
                element:<EventDetails></EventDetails>,
                loader: ({params})=> fetch(`http://localhost:3000/event-details/${params.id}`)
            }

        ]
    }
])
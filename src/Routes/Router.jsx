import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import UpcomingEvents from "../Pages/UpcomingEvents";
import LogIn from "../Components/Auth/LogIn";
import Register from "../Components/Navbar/Register";
import CreateEvent from "../Pages/CreateEvent";
import PrivateRouter from "./PrivateRouter";
import EventDetails from "../Pages/EventDetails";
import ManageEvents from "../Pages/ManageEvents";
import JoinEvent from "../Pages/JoinEvent";
import UpdateEvent from "../Pages/UpdateEvent";

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
                loader: ()=> fetch("https://impactify-server.vercel.app/event")
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
                loader: ({params})=> fetch(`https://impactify-server.vercel.app/event-details/${params.id}`)
            },
            {
                path:"/manage-events",
                element: <PrivateRouter><ManageEvents /></PrivateRouter>
            },
            {
                path:'/join-event',
                element:<PrivateRouter><JoinEvent/></PrivateRouter>
            },
            {
                path:'/update-event/:id',
                element:<PrivateRouter><UpdateEvent /></PrivateRouter>,
                loader: ({params})=> fetch(`https://impactify-server.vercel.app/event/${params.id}`)
            }

        ]
    }
])
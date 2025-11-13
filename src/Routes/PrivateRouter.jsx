import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Components/Context/AuthContext";


const PrivateRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
        return <div>Loading...</div>
    }

    if(!user){
       return <Navigate state={location?.pathname} to="/login"></Navigate>;
    }
    return children
};

export default PrivateRouter;
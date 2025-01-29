import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth/auth";
import Login from "./login";

const PrivateRoute=()=>{

    return isLoggedIn() ? <Outlet/> : <Navigate to="/login"/>
}
export default PrivateRoute;
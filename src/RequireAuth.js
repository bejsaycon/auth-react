import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./RandomUserApp/custom_hooks/useAuth";

const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();
    return(
        auth === false ? <Navigate to="/login" state={{from: location}} replace/> : <Outlet />
    )
}
export default RequireAuth;
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    console.log(user?.email);
console.log(loading);
    if (loading) {
        return <div className="text-6xl text-center">
            loading...
          
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={"/logIn"}></Navigate>
}

export default PrivateRoute
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

Navigate

const ProtectedRoute = ({children, path}) => {

    let user = useSelector(store => store.userReducer.user); 

    if(!user) return children
    return <Navigate to={path}/>
}

export default ProtectedRoute
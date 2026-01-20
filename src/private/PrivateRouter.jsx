import { Navigate, useLocation } from "react-router"
import useAuth from "../hooks/useAuth"
import LoadingSpinner from "../shared/LoadingSpinner"

const PrivateRouter = ({children}) => {
  const location = useLocation()
  const {user, loading} = useAuth()
  if(loading) return <LoadingSpinner />
  if(user) return children; 

  return <Navigate state={location.pathname} to="/login" />
}

export default PrivateRouter
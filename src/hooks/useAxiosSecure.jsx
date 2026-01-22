import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: import.meta.env.VITE_LOCALHOST,
  withCredentials: true, 
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        console.log('Error caught in interceptor:', error.response);
        const status = error.response ? error.response.status : null;
        if (error.response && (status === 401 || status === 403)) {
          await logOutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptor on unmount
    return () => {
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [logOutUser, navigate]);

  return instance;
};

export default useAxiosSecure;
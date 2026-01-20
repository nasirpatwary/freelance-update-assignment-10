import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
const instance = axios.create({
  baseURL: import.meta.env.VITE_LOCALHOST,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, logOutUser } = useAuth();
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user.accessToken;
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.status === 401 || error.status === 403) {
          await logOutUser();
          navigate("/register");
        }
        return Promise.reject(error);
      }
    );
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.request.eject(responseInterceptor);
    };
  }, [user, logOutUser, navigate]);
  return instance;
};

export default useAxiosSecure;

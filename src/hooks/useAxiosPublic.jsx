import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_LOCALHOST,
});
const useAxiosPublic = () => {
  return instance
}

export default useAxiosPublic
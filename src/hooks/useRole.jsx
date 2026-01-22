import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const {user, loading} = useAuth()
  const {data: role="user", isLoading: isRoleLoading} = useQuery({
    queryKey: ['user-role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const {data} = await axiosSecure.get(`/users/${user.email}/role`);
      return data.role;
    }
    })   
  return {role, isRoleLoading};
};

export default useRole;

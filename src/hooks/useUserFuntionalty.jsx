import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"
import toast from "react-hot-toast"

export const useGetUsers = () => {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()
const { data: users = [], isLoading, isError } = useQuery({
   queryKey: ["users", user?.email],
   queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user.email}`)
      return data
   }
})
   return [users, isLoading, isError]
}

export const useModifyRole = () =>{
   const axiosSecure = useAxiosSecure()
   const queryClient = useQueryClient()
   const mutation = useMutation({
      mutationFn: async ({id, ...updateDoc}) => {
         const {data} = await axiosSecure.patch(`/users/${id}/role`, updateDoc)
         return data
      },
      onSuccess: (data)=>{
         toast.success(`modify ${data.role} successfully!`)
         queryClient.invalidateQueries({queryKey: ["users"]})
      },
      onError: (error) => toast.error(error.message)
   })
   return mutation
}

export const useRole = () => {
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


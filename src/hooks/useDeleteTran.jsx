import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import useAxiosSecure from "./useAxiosSecure"

const useDeleteTran = () => {
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()
    const {mutateAsync} = useMutation({
        mutationFn: async (id) => {
            await axiosSecure.delete(`/transactions/${id}`);
        },
        onSuccess: () =>{
            toast.success("Deleted successfully!")
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
        },
        onError:(error) => toast.error(error.message)
        
    })
  return [mutateAsync];
}

export default useDeleteTran
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "./useAxiosSecure";
const usePostTransaction = () => {
    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()
     const { mutateAsync, isPending } = useMutation({
       mutationFn: async (newTransactions) => {
         return await axiosSecure.post("/transactions", newTransactions);
       },
       onSuccess: () => {
         toast.success("Add transaction uccessfully!");
         queryClient.invalidateQueries({ queryKey: ["transactions"] });
       },
       onError: (error) => {
         toast.error(error.message);
       },
     });
  return [mutateAsync, isPending];
}

export default usePostTransaction
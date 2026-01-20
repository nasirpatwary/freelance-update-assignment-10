import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import useAxiosSecure from "./useAxiosSecure"

export const usePatchTran = () => {
    const queryClient = useQueryClient()
    const axiosSecure = useAxiosSecure()
    const {mutateAsync, isPending} = useMutation({
        mutationFn: async (updateDoc) => {
            const { id, ...body } = updateDoc;
            console.log(body)
            await axiosSecure.patch(`/transactions/${id}`, body);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            toast.success("updated successfully!")
        },
        onError: (errer) => toast.error(errer.message)
    })
  return [mutateAsync, isPending]
}

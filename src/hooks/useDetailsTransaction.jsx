import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useDetailsTransaction = (id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: transactions = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["transactions", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/transactions-byId/${id}`
      );
      return data;
    },
  });
  return [transactions, isLoading, isError];
};

export default useDetailsTransaction;

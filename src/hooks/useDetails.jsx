import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useDeatils = (id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: transactions = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["transactions", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/transactions/${id}`
      );
      return data;
    },
  });
  return [transactions, isLoading, isError];
};

export default useDeatils;

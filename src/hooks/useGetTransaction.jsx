import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetTransaction = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const {
    data: transactions = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["transactions", user.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/transactions?email=${user?.email}`);
      return data;
    },
  });
  return [transactions, isLoading, isError];
};

export default useGetTransaction;

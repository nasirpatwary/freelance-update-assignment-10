import { useInfiniteQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTransactions = ({ search, category, location, sort }) => {
  const axiosSecure = useAxiosSecure();

  return useInfiniteQuery({
    // The queryKey must include all filters so that data refreshes when they change
    queryKey: ["transactions", search, category, location, sort],
    
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await axiosSecure.get(`/transactions`, {
        params: { 
          search, 
          category, 
          location, 
          sort, 
          page: pageParam, 
          limit: 8 
        },
      });
      return data; // Server returns { items: [], nextPage: 2 }
    },
    
    // Logic to determine the next page
    getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
    initialPageParam: 1,
  });
};

export default useTransactions;
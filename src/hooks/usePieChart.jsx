import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePieChart = () => {
  const axioSecure = useAxiosSecure()
  const {
    data: charts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["category-summary"],
    queryFn: async () => {
      const { data } = await axioSecure.get("/reports/category-summary");
      return data;
    },
  });

  return { charts, isLoading, isError };
};

export default usePieChart;

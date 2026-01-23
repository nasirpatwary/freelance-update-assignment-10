import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePieChart = () => {
  const axioSecure = useAxiosSecure()
  const {
    data: charts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["stats-summary"],
    queryFn: async () => {
      const { data } = await axioSecure.get("/stats/summary");
      return data;
    },
  });

  return { charts, isLoading, isError };
};

export default usePieChart;

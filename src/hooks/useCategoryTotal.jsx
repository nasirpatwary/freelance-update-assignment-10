import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCategoryTotal = (category) => {
  const axiosSecure = useAxiosSecure()
  const { data: categoryTotal = 0 } = useQuery({
    queryKey: ["transactions", category],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/category-total/${category}`);
      return data;
    },
    enabled: !!category,
  });
  console.log(categoryTotal)
  return { categoryTotal};
};

export default useCategoryTotal;

import { useParams } from "react-router";
import useDeatils from "../hooks/useDetails";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorPage from "./ErrorPage";
import DetailsTable from "./DetailsTable";

const DetailsPage = () => {
  const { id } = useParams();
  const [transactions, isLoading, isError] = useDeatils(id);
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return (
    <>
    <title>Finance || Details{id}</title>
      <DetailsTable {...transactions} />
    </>
  );
};

export default DetailsPage;

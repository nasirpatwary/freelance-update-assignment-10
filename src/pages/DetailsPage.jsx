import { useParams } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorPage from "./ErrorPage";
import DetailsTable from "./DetailsTable";
import useDetailsTransaction from "../hooks/useDetailsTransaction";

const DetailsPage = () => {
  const { id } = useParams();
  const [transactions, isLoading, isError] = useDetailsTransaction(id);
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

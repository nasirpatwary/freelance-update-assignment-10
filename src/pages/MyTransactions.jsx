import useGetTransaction from "../hooks/useGetTransaction";
import MyTable from "../sections/MyTable";
import Container from "../shared/Container";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorPage from "./ErrorPage";

const MyTransactions = () => {
  const [transactions, isLoading, isError] = useGetTransaction();
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return (
    <Container className="my-12">
      <title>My Transactions</title>
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Complete Transaction History
        </h2>
        <p className="text-lg max-w-[55ch] mx-auto text-gray-700 dark:text-gray-300">
          Access your full transaction history anytime. Download, filter, and
          review past activities for easy budgeting and planning.
        </p>
      </div>
      <MyTable transactions={transactions} />
    </Container>
  );
};

export default MyTransactions;

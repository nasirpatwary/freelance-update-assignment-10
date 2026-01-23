import useGetMyTransaction from "../../hooks/useGetMyTransaction";
import MyTable from "../../sections/MyTable";
import Container from "../../shared/Container";
import LoadingSpinner from "../../shared/LoadingSpinner";
import ErrorPage from "../ErrorPage";

const MyTransactions = () => {
  const [transactions, isLoading, isError] = useGetMyTransaction();
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return (
    <Container className="h-screen py-10">
      <title>My Transactions</title>
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Complete Transaction History
        </h2>
        <p className="text-lg max-w-[55ch] mx-auto text-gray-700 dark:text-gray-300">
          Access your full transaction history anytime. Download, filter, and
          review past activities for easy budgeting and planning.
        </p>
      </div>
     <div className="mt-8">
       <MyTable transactions={transactions} />
     </div>
    </Container>
  );
};

export default MyTransactions;

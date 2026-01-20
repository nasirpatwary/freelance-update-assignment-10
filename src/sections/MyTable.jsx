import TableCart from "./TableCart";

const MyTable = ({ transactions }) => {
  return (
    <div className="mt-12">
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 space-y-3 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
            alt="No data"
            className="w-20 opacity-70"
          />
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
            No Transactions Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-300 max-w-md">
            Start by adding an income or expense to visualize your financial
            data here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow rounded-xl border border-gray-100 dark:border-gray-700">
          <table className="table w-full">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 uppercase text-sm font-semibold">
              <tr>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Details</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {transactions.map((transaction) => (
                <TableCart key={transaction._id} transaction={transaction} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTable;

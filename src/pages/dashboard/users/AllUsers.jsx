import { useGetUsers } from "../../../hooks/useUserFuntionalty";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import ErrorPage from "../../ErrorPage";
import Table from "./Table";

const AllUsers = () => {
  const [users, isLoading, isError] = useGetUsers();
  
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return (
    <>
        <title>All Users || Dashboard</title>

      <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-400 shadow-sm transition-colors duration-300">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Manage Users</h2>
        
        <div className="overflow-x-auto rounded-xl">
          <table className="table">
            {/* head */}
            <thead className="bg-slate-50 dark:bg-gray-800/50">
              <tr className="text-slate-600 dark:text-gray-300 border-b dark:border-gray-700">
                <th className="py-4">User</th>
                <th>Name</th>
                <th>Email</th>
                <th>Current Role</th>
                <th className="text-center">Modify Access</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-gray-300">
              {users.map((user) => (
                <Table key={user._id} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
import { useState } from "react";
import { useGetUsers } from "../../../hooks/useUserFuntionalty";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import ErrorPage from "../../ErrorPage";
import TableRow from "./TableRow";
import { FiSearch, FiUsers } from "react-icons/fi";

const AllUsers = () => {
  const [users, isLoading, isError] = useGetUsers();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <title>Manage Users || Financial</title>

      <div className="max-w-5xl mx-auto rounded border border-slate-200 dark:border-gray-800 shadow-xl overflow-hidden transition-all duration-300">
        {/* --- Central Header & Search Section --- */}
        <div className="p-10 border-b border-slate-100 dark:border-gray-800 flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-2xl mb-4">
              <FiUsers
                className="text-indigo-600 dark:text-indigo-400"
                size={28}
              />
            </div>
            <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
              User Directory
            </h2>
            <p className="text-slate-500 dark:text-gray-400 mt-2 font-medium">
              Oversee and manage roles for {users?.length} platform members
            </p>
          </div>

          {/* Centered Search Bar */}
          <div className="relative w-full max-w-lg group">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-gray-900/50 border border-slate-200 dark:border-gray-700 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 dark:focus:border-indigo-400 dark:text-white transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- Table Section --- */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-slate-50/80 dark:bg-gray-800/50">
              <tr>
                <th className="py-4 px-6 text-slate-600 dark:text-gray-300 font-semibold">
                  Photo & Name
                </th>
                <th className="py-4 px-6 text-slate-600 dark:text-gray-300 font-semibold">
                  Email
                </th>
                <th className="py-4 px-6 text-slate-600 dark:text-gray-300 font-semibold text-center">
                  Role
                </th>
                <th className="py-4 px-6 text-slate-600 dark:text-gray-300 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user._id} {...user} />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="p-4 bg-slate-50 dark:bg-gray-800 rounded-full">
                        <FiSearch
                          className="text-slate-300 dark:text-gray-600"
                          size={32}
                        />
                      </div>
                      <p className="text-slate-400 dark:text-gray-500 italic font-medium">
                        No matching members found for "{searchTerm}"
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;

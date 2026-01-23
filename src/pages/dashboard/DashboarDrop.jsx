import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
const DashboarDrop = () => {
const { logOutUser, user } = useAuth();
const [menu, setMenu] = useState(false);
  return (
    <div
      onClick={() => setMenu(!menu)}
      className="text-gray-800 dark:text-gray-200"
    >
      <img
        referrerPolicy="no-referrer"
        className="size-10 rounded-full object-cover cursor-pointer"
        src={
          user?.photoURL ||
          "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
        }
        alt={user?.displayName || "user"}
      />

      {menu && (
        <div
          className="fixed z-50 -translate-x-4/5 bg-white dark:bg-gray-900 
                text-gray-800 dark:text-gray-200 top-16 p-4 w-52 shadow rounded"
        >
          <div className="space-y-4 text-center">
            <img
              referrerPolicy="no-referrer"
              className="size-10 mx-auto rounded-full object-cover cursor-pointer"
              src={
                user?.photoURL ||
                "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
              }
              alt={user?.displayName || "user"}
            />

            <div>
              <p className="font-semibold">{user?.displayName}</p>
              <small className="text-gray-600 dark:text-gray-400">
                {user?.email}
              </small>
            </div>
            <Link to="/dashboard/profile" className="flex justify-center gap-2">
              <IoSettingsOutline size={20} /> Profile
            </Link>
            <button
              onClick={logOutUser}
              className="cursor-pointer flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300"
            >
              <MdLogout size={18} /> LogOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboarDrop;

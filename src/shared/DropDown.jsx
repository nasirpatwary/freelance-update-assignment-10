import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { GrSettingsOption } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { ButtonComponent } from "../shared/ButtonComponent";
import SocialLogin from "../shared/SocialLogin";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router";
const DropDown = ({ navLinks }) => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const { user, logOutUser } = useAuth();
  return (
    <div className="navbar-end">
      <div className="lg:hidden">
        <div className="text-2xl relative z-50 text-gray-700 dark:text-gray-200">
          {open ? (
            <MdClose
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <IoIosMenu
              onClick={() => setOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
        <div
          className={`fixed z-10 overflow-y-auto space-y-6 p-4 top-16 right-0 w-full md:w-1/2 h-screen 
                  bg-white dark:bg-gray-900 backdrop-blur-sm shadow-lg 
                  transition-transform duration-500 ease-in-out transform 
                  ${open ? "translate-x-0" : "translate-x-full"}
                `}
        >
          <ul className="flex flex-col text-base space-y-3 text-gray-700 dark:text-gray-200">
            {navLinks}
          </ul>
          <div
            onClick={() => setDrop(!drop)}
            className="text-gray-700 dark:text-gray-200"
          >
            <GrSettingsOption size={24} />

            {drop && (
              <div
                className="fixed z-50 translate-y-1/8 bg-white/40 dark:bg-gray-800/40 
                      backdrop-blur-sm p-4 w-72 h-80 shadow-sm dark:shadow-2xl rounded-2xl dark:border dark:border-slate-200 text-gray-800 dark:text-gray-200"
              >
                {user ? (
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
                    <Link to="/profile">
                      <IoSettingsOutline /> Profile
                    </Link>
                    <button
                      onClick={logOutUser}
                      className="cursor-pointer flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300"
                    >
                      <MdLogout size={18} /> LogOut
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <img
                      referrerPolicy="no-referrer"
                      className="size-10 mx-auto rounded-full object-cover cursor-pointer"
                      src={
                        user?.photoURL ||
                        "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
                      }
                      alt={user?.displayName || "user"}
                    />

                    <ButtonComponent
                      to="/login"
                      className="btn-sm border-primary text-gray-700"
                    >
                      Login
                    </ButtonComponent>

                    <ButtonComponent
                      to="/register"
                      className="btn-sm border-primary text-gray-700"
                    >
                      Register
                    </ButtonComponent>

                    <SocialLogin />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        onClick={() => setMenu(!menu)}
        className="hidden lg:block text-gray-800 dark:text-gray-200"
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
            {user ? (
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
                <Link to="/profile" className="flex justify-center gap-2">
                  <IoSettingsOutline size={20} /> Profile
                </Link>
                <button
                  onClick={logOutUser}
                  className="cursor-pointer flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300"
                >
                  <MdLogout size={18} /> LogOut
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <img
                  referrerPolicy="no-referrer"
                  className="size-10 mx-auto rounded-full object-cover cursor-pointer"
                  src={
                    user?.photoURL ||
                    "https://i.pinimg.com/736x/c9/ec/19/c9ec19bdd57f588822bbc64065c919b6.jpg"
                  }
                  alt={user?.displayName || "user"}
                />

                <ButtonComponent
                  to="/login"
                  className="btn-sm border-primary text-gray-700"
                >
                  Login
                </ButtonComponent>

                <ButtonComponent
                  to="/register"
                  className="btn-sm border-primary text-gray-700"
                >
                  Register
                </ButtonComponent>
                <SocialLogin />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;

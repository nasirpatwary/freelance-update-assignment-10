import { Link, Outlet } from "react-router";
import DarkMode from "../shared/DarkMode";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import { AiOutlineHome } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import DashboarDrop from "../pages/dashboard/DashboarDrop";
import { useRole } from "../hooks/useUserFuntionalty";
import { FaUsersGear } from "react-icons/fa6";

const DashboarLayout = () => {
  const { logOutUser } = useAuth();
  const { role } = useRole();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Navbar */}

        <nav className="navbar bg-base-200 justify-between gap-4 w-full dark:bg-gray-950 dark:text-gray-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}

            <TbLayoutSidebarLeftCollapse size={20} />
          </label>
          <DashboarDrop />
        </nav>
        <div className="dark:bg-gray-800 min-h-[calc(100vh-64px)]">
          <Outlet />
        </div>

        <DarkMode />
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col items-start bg-base-200 dark:bg-gray-950 dark:text-gray-300 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}

          <Link
            to="/"
            className="

            is-drawer-close:tooltip is-drawer-close:tooltip-right

            text-xl p-5 flex gap-1 items-center text-gray-800 dark:text-white"
            data-tip="Financial"
          >
            <AiOutlineHome size={20} />{" "}
            <span className="is-drawer-close:hidden">Financial</span>
          </Link>

          <ul className="menu space-y-4">
            {/* List item */}

            <li>
              <Link
                to="/dashboard"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard Home"
              >
                <MdDashboard size={20} />

                <span className="is-drawer-close:hidden">Dashboard Home</span>
              </Link>
            </li>

            {role === "admin" ? (
              <>
                <li>
                  <Link
                    to="/dashboard/reports"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Reports"
                  >
                    <FaChartLine size={20} />

                    <span className="is-drawer-close:hidden">Reports</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/users"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="All Users"
                  >
                    <FaUsersGear size={20} />

                    <span className="is-drawer-close:hidden">All Users</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/dashboard/addTransaction"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Add Transaction"
                  >
                    <VscSettings size={20} />

                    <span className="is-drawer-close:hidden">
                      Add Transaction
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/myTransaction"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Transaction"
                  >
                    <GiTakeMyMoney size={20} />

                    <span className="is-drawer-close:hidden">
                      My Transaction
                    </span>
                  </Link>
                </li>
              </>
            )}

            <li>
              <button
                onClick={logOutUser}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right cursor-pointer flex items-center gap-2 text-gray-700 dark:text-gray-300"
                data-tip="LogOut"
              >
                <MdLogout size={20} />{" "}
                <span className="is-drawer-close:hidden">LogOut</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboarLayout;

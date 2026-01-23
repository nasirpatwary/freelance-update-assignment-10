import { Link, NavLink, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Container from "../shared/Container";
import logo from "../assets/icons8-redux-48-removebg-preview.png";
import DropDown from "../shared/DropDown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="group relative text-gray-700 dark:text-gray-200"
      >
        Home <span className="nav"></span>
      </NavLink>
      <NavLink
        to="/About"
        className="group relative text-gray-700 dark:text-gray-200"
      >
        About <span className="nav"></span>
      </NavLink>
      <NavLink
        to="/contact"
        className="group relative text-gray-700 dark:text-gray-200"
      >
        Contact <span className="nav"></span>
      </NavLink>
      <NavLink
        to="/blog"
        className="group relative text-gray-700 dark:text-gray-200"
      >
        Blogs <span className="nav"></span>
      </NavLink>
      <NavLink
        to="/financials"
        className="group relative text-gray-700 dark:text-gray-200"
      >
        Financials <span className="nav"></span>
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className="group relative text-gray-700 dark:text-gray-200"
        >
          Dashboard <span className="nav"></span>
        </NavLink>
      )}
    </>
  );

  useEffect(() => {
    if (open) setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="backdrop-blur-sm shadow fixed w-full z-50 bg-white/70 dark:bg-gray-900/70">
      <Container>
        <div className="navbar p-0">
          <div data-aos="fade-right" className="navbar-start">
            <Link
              to="/"
              className="text-2xl flex gap-2 items-center text-gray-800 dark:text-white"
            >
              <img className="size-10" src={logo} alt="logo" /> Financial
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-base menu-horizontal gap-6">{navLinks}</ul>
          </div>
          <DropDown navLinks={navLinks} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

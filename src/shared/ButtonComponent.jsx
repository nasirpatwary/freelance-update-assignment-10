import { Link } from "react-router";
export const ButtonComponent = ({ children, to, className = "" }) => {
  return (
    <Link
      to={to}
      className={`${className} btn duration-500 hover:bg-primary hover:text-white font-semibold`}
    >
      {children}
    </Link>
  );
};

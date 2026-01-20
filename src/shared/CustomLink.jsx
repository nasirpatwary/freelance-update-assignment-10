import { Link } from "react-router";
const CustomLink = ({ routPath, to, path }) => (
  <p className="dark:text-gray-400">
    {routPath}{" "}
    <Link to={to} className="text-primary underline">
      {path}
    </Link>
  </p>
);
export default CustomLink;

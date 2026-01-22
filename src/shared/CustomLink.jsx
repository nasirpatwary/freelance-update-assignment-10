import { Link } from "react-router";
const CustomLink = ({ routPath, to, path, state }) => (
  <p>
    {routPath}{" "}
    <Link to={to} state={state} className="underline">
      {path}
    </Link>
  </p>
);
export default CustomLink;

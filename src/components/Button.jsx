import { NavLink } from "react-router";

function Button({ label, link }) {
  return (
    <NavLink className="bg-fuchsia-500 text-white" to={link}>
      {label}
    </NavLink>
  );
}

export default Button;

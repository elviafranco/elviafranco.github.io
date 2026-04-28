import { NavLink } from "react-router";
import Avatar from "../assets/react.svg";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-around">
          <NavLink to="/">
            <img src={Avatar} />
          </NavLink>
          <NavLink to="/ribi">Ribi</NavLink>
          <NavLink to="/kite">Kite</NavLink>
          <NavLink to="/lesgo">Lesgo</NavLink>
          <Button />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

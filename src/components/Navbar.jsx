import { NavLink } from "react-router";
import { Sun, Moon } from "lucide-react";
import Avatar from "../assets/headshot.jpg";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <div className="flex justify-around">
        <NavLink to="/">
          <img
            src={Avatar}
            alt="headshot"
            className="size-10 rounded-full hover:border-2 border-fuchsia-500/25"
          />
        </NavLink>
        <Button link="/kite" label="Kite" />
        <Button link="/lesgo" label="Lesgo" />
        <Button link="/ribi" label="Ribi" />
        <button>
          <Sun />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

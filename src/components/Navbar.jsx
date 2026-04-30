import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Avatar from "../assets/headshot.jpg";
import Button from "./Button";

function Navbar() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="my-10 mx-4">
      <div className="flex justify-around">
        <NavLink to="/">
          <img
            src={Avatar}
            alt="headshot"
            className="size-11 rounded-full border-2 border-[var(--border)] hover:border-[var(--accent-border)]"
          />
        </NavLink>
        <Button link="/kite" label="Kite" />
        <Button link="/lesgo" label="Lesgo" />
        <Button link="/ribi" label="Ribi" />
        <button
          className="p-2 rounded-lg border-2 border-[var(--border)] hover:text-[var(--accent)] hover:border-[var(--accent-border)]"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

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
    <nav className="p-4 mb-8 border-b-2 border-[var(--border)]">
      <div className="flex justify-between">
        <NavLink to="/" 
        className={({ isActive }) => 
        `rounded-full border-2 ${isActive ? "border-[var(--accent)]" : "border-[var(--border)] hover:border-[var(--accent-border)]"}`
      }>
          <img
            src={Avatar}
            alt="headshot"
            className="size-8 rounded-full"
          />
        </NavLink>
        <div className="flex items-center gap-4">
        <Button link="/kite" label="Kite" />
        <Button link="/lesgo" label="Lesgo" />
        <Button link="/ribi" label="Ribi" />
        </div>
        <button
          className="inline-flex items-center justify-center p-2 rounded-lg hover:text-[var(--accent)] hover:bg-[var(--bg-s)]"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

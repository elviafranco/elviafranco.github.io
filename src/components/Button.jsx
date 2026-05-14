import { NavLink } from "react-router";

function Button({ label, link, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `w-auto inline-flex gap-2 items-center p-2 rounded-lg text-sm font-medium ${isActive ? "text-[var(--accent)] bg-[var(--bg-s)]" : "hover:text-[var(--accent)] hover:bg-[var(--accent-bg)]/25"}`
      }
      to={link}
    >
      {children}
      {label}
    </NavLink>
  );
}

export default Button;

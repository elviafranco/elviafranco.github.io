import { NavLink } from "react-router";

function Button({ label, link }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `w-auto inline-flex items-center justify-center px-2 py-1 rounded-lg text-sm font-medium ${isActive ? "text-[var(--accent)] bg-[var(--accent-bg)]" : "hover:text-[var(--text-h)] hover:bg-[var(--bg-s)]"}`
      }
      to={link}
    >
      {label}
    </NavLink>
  );
}

export default Button;

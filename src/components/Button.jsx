import { NavLink } from "react-router";

function Button({ label, link, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `w-auto inline-flex gap-2 items-center justify-center p-2 rounded-lg text-sm font-medium text-(--button-text) ${isActive ? "text-(--accent) bg-(--bg-s)" : "hover:text-(--accent) hover:bg-(--accent-bg)/25"}`
      }
      to={link}
    >
      {children}
      {label}
    </NavLink>
  );
}

export default Button;

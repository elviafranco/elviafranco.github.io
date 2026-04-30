import { NavLink } from "react-router";

function Button({ label, link }) {
  return (
    <NavLink
      className="px-4 py-2 inline-flex items-center justify-center rounded-lg text-sm font-medium border-2 border-[var(--border)] hover:text-[var(--accent)] hover:bg-[var(--accent-bg)] hover:border-[var(--accent-border)]"
      to={link}
    >
      {label}
    </NavLink>
  );
}

export default Button;

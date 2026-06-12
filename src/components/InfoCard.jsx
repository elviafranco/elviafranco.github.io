function InfoCard({ label, className, children }) {
  return (
    <div
      className={`${className ?? ""} group flex flex-col justify-between text-sm text-left p-4 rounded-lg overflow-hidden border-1 border-[var(--border)] hover:bg-[var(--bg-s)] hover:text-[var(--text-h)]`}
    >
      <h3 className="mb-3">{label}</h3>
      <div>{children}</div>
    </div>
  );
}

export default InfoCard;

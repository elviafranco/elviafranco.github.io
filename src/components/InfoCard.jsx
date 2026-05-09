function InfoCard({ label, children }) {
  return (
    <div className="p-4 rounded-lg border-2 border-[var(--border)]">
      <h3>{label}</h3>
      {children}
    </div>
  );
}

export default InfoCard;

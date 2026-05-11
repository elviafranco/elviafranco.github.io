function InfoCard({ label, children }) {
  return (
    <div className="flex flex-col p-4 rounded-lg overflow-hidden border-2 border-[var(--border)] hover:bg-[var(--bg-s)]">
      <h3 className="mb-3">{label}</h3>
      {children}
    </div>
  );
}

export default InfoCard;

function InfoCard({ label, className, bgImage, children }) {
  return (
    <div
      className={`${className ?? ""} relative group flex flex-col justify-between text-sm text-left p-4 rounded-lg overflow-hidden border-1 border-[var(--border)] hover:bg-[var(--bg-s)] hover:text-[var(--text-h)]`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {bgImage && <div className="absolute inset-0 [var(--bg)]/50" />}
      <h3 className="relative z-10 mb-3">{label}</h3>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default InfoCard;

function InfoCard({ label, className, bgImage, children }) {
  // 1. Build conditional classes for the outer container
  const baseCardClasses =
    "flex flex-col justify-between text-sm text-left rounded-lg border border-(--border)";
  const nonBgClasses = "p-4 hover:bg-(--bg-s) hover:text-(--text-h)";

  return (
    <div
      className={`${className ?? ""} ${baseCardClasses} ${nonBgClasses}`}
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
      {bgImage ? (
        // 2. If there IS a bgImage, wrap content in the backdrop blur overlay
        <div className="w-full h-full p-4 rounded-lg backdrop-blur-xs bg-(--bg)/75">
          <h3 className="mb-3">{label}</h3>
          {children}
        </div>
      ) : (
        // 3. If there is NO bgImage, just render the content normally
        <>
          <h3 className="mb-3">{label}</h3>
          {children}
        </>
      )}
    </div>
  );
}

export default InfoCard;

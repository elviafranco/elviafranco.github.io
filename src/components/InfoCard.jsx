function InfoCard({ label, className, bgImage, children }) {
  return (
    <div
      className={`${className ?? ""} text-sm text-left rounded-lg overflow-hidden border border-(--border)`}
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
      <div
        className={`p-4 flex flex-col justify-between h-full hover:bg-(--bg-s) hover:text-(--text-h) ${bgImage ? "backdrop-blur-xs bg-(--bg)/75" : ""}`}
      >
        <h3 className="mb-3 ">{label}</h3>
        {children}
      </div>
    </div>
  );
}

export default InfoCard;

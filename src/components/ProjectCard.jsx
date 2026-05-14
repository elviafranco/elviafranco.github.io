import Button from "./Button";

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="group rounded-lg overflow-hidden border-1 border-[var(--border)] hover:bg-[var(--bg-s)]">
      <div className="flex gap-3 items-center flex-col md:flex-row">
        {/* Content */}
        <div className="flex-1 p-4 text-left group-hover:text-[var(--text-h)]">
          <h3 className="mb-4">{title}</h3>
          <p>{description}</p>
        </div>
        {/* Image */}
        <div className="relative flex-1 mask-t-from-50% md:mask-t-from-100%  md:mask-l-from-50%">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button link={link} label={`Explore ${title}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;

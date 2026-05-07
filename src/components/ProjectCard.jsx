import Button from "./Button";

function ProjectCard({ title, description, image }) {
  return (
    <div className="m-4 rounded-lg p-6 hover:bg-[var(--bg-s)]">
      <div className="flex gap-6 items-center flex-col md:flex-row">
        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-4">{title}</h3>
          <p>{description}</p>
        </div>
        {/* Image */}
        <div className="relative flex-1 overflow-hidden rounded-lg mask-t-from-50% md:mask-t-from-100%  md:mask-l-from-50%">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100">
            <Button link="/kite" label="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;

import ProjectCard from "./ProjectCard";
import KiteImage from "../assets/kite.png";
import InfoCard from "./InfoCard";

const project = {
  title: "Kite",
  description:
    "Redesigning the communication experience between incarcerated people and their loved ones",
  image: KiteImage,
  link: "https://dribbble.com/shots/19058909-Kite-Correctional-Services-App",
  label: "Kite case study →",
};

function CaseStudyPage() {
  return (
    <div className="p-4">
      <ProjectCard
        title={project.title}
        description={project.description}
        image={project.image}
        link={project.link}
        label={project.label}
      />
      <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col">
        <InfoCard label="Overview" className="row-span-2 h-full">
          <div className="flex flex-col gap-4">
            <div>
              <h4>Timeline</h4>
              <p>3 weeks</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>Figma · Maze · Zoom</p>
            </div>
            <div>
              <h4>Role</h4>
              <p>UX Designer (end-to-end)</p>
            </div>
            <div>
              <h4>Key Deliverables</h4>
              <p>
                User research & personas, user flows & sitemap, branding,
                usability-tested high-fidelity prototype
              </p>
            </div>
          </div>
        </InfoCard>
        <InfoCard label="Problem" className="col-span-1">
          <p>
            Prison telecom providers hold $1.6B in contracts, yet their apps
            remain outdated, frustrating, and hard to use and adding friction to
            communication that families depend on. Loved ones on the outside
            carry the burden of clunky interfaces during an already stressful
            experience.
          </p>
        </InfoCard>

        <InfoCard label="Outcome" className="col-span-1">
          <p>
            A modernized communication app designed with direct input from
            friends and family of incarcerated people, grounded in interviews
            and validated through usability testing.
          </p>
        </InfoCard>
        <InfoCard label="Case Study" className="row-span-2 h-full">
          <p>
            Learn more about my process and explore the details in the case
            study.
          </p>
        </InfoCard>
      </div>
    </div>
  );
}

export default CaseStudyPage;

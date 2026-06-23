import ProjectCard from "../components/ProjectCard";
import Ribi from "../assets/ribi/ribi.png";
import Lesgo from "../assets/lesgo/lesgo.png";
import Kite from "../assets/kite/hero.png";

const projects = [
  {
    id: 1,
    title: "Kite",
    description:
      "A better way to serve the communication needs of the incarcerated and their loved ones.",
    hero: Kite,
    link: "/kite",
  },
  {
    id: 2,
    title: "Lesgo",
    description:
      "Designed to get commuters where they need to be, when they need to be there.",
    hero: Lesgo,
    link: "/lesgo",
  },
  {
    id: 3,
    title: "Ribi",
    description:
      "Simple and effective UI to find your perfect dog walker in minutes.",
    hero: Ribi,
    link: "/ribi",
  },
];

function ProjectList() {
  return (
    <ul role="list" className="space-y-4">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard
            title={project.title}
            description={project.description}
            hero={project.hero}
            link={project.link}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;

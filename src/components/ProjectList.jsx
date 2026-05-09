import ProjectCard from "../components/ProjectCard";
import Ribi from "../assets/ribi.png";
import Lesgo from "../assets/lesgo.png";
import Kite from "../assets/kite.png";

const projects = [
  {
    id: 1,
    title: "Kite",
    description:
      "A better way to serve the communication needs of the incarcerated and their loved ones.",
    image: Kite,
    link: "/kite",
  },
  {
    id: 2,
    title: "Lesgo",
    description:
      "Designed to get commuters where they need to be, when they need to be there.",
    image: Lesgo,
    link: "/lesgo",
  },
  {
    id: 3,
    title: "Ribi",
    description:
      "Simple and effective UI to find your perfect dog walker in minutes.",
    image: Ribi,
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
            image={project.image}
            link={project.link}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;

import ProjectCard from "../components/ProjectCard";
import Ribi from "../assets/ribi.png";
import Lesgo from "../assets/lesgo.png";
import Kite from "../assets/kite.png";

const projects = [
  {
    title: "Kite",
    description:
      "A better way to serve the communication needs of the incarcerated and their loved ones.",
    image: Kite,
  },
  {
    title: "Lesgo",
    description:
      "Designed to get commuters where they need to be, when they need to be there.",
    image: Lesgo,
  },
  {
    title: "Ribi",
    description:
      "Simple and effective UI to find your perfect dog walker in minutes.",
    image: Ribi,
  },
];

function Home() {
  return (
    <>
      <h1>HOME</h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </>
  );
}

export default Home;

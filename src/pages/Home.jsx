import ProjectList from "../components/ProjectList";
import BioPanel from "../components/BioPanel";

function Home() {
  return (
    <>
      <div className="px-4 py-8 flex flex-col md:flex-row">
        <div className="basis-2/3">
          <ProjectList />
        </div>
        <div className="basis-1/3">
          <BioPanel />
        </div>
      </div>
    </>
  );
}

export default Home;

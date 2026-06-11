import CaseStudyPage from "../components/CaseStudyPage";
import KiteImage from "../assets/kite.png";

const project = {
  title: "Kite",
  description: "A better way to stay in touch.",
  image: KiteImage,
  link: "https://dribbble.com/shots/19058909-Kite-Correctional-Services-App",
};

function Kite() {
  return <CaseStudyPage {...project} />;
}

export default Kite;

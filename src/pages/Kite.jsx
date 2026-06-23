import CaseStudyPage from "../components/CaseStudyPage";
import hero from "../assets/kite/hero.png";

const project = {
  title: "Kite",
  description: "A better way to stay in touch.",
  hero: hero,
  link: "https://dribbble.com/shots/19058909-Kite-Correctional-Services-App",
};

function Kite() {
  return <CaseStudyPage {...project} />;
}

export default Kite;

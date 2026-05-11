import InfoCard from "./InfoCard";
import asu from "../assets/asu.png";

function BioPanel() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-3 gap-4">
      <InfoCard label="Overview">
        <p>
          Elvia Franco is a digital jack of all trades with experience in
          design, development, marketing and strategy. These days, she's an
          everything woman @creovia.io with a passion for creating beautiful and
          functional web experiences.
        </p>
      </InfoCard>
      <div className="grid grid-cols-2 gap-4">
        <InfoCard label="Education">
          <div>
            <p>Management, M.S.</p>
            <p>Arizona State University</p>
          </div>
          <div
            className="p-2 w-24 h-auto rounded-lg 
        bg-[var(--bg-s)]"
          >
            <img src={asu} alt="asulogo" className="object-contain" />
          </div>
        </InfoCard>
        <InfoCard label="Personality">
          <p>INTJ</p>
        </InfoCard>{" "}
        <InfoCard label="Tech Stack"></InfoCard>
      </div>
    </div>
  );
}

export default BioPanel;

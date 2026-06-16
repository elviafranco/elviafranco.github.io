import InfoCard from "./InfoCard";
import Button from "./Button";
import CssIcon from "../assets/icons/css.svg?react";
import FigmaIcon from "../assets/icons/figma.svg?react";
import GitIcon from "../assets/icons/git.svg?react";
import HtmlIcon from "../assets/icons/html5.svg?react";
import JavascriptIcon from "../assets/icons/javascript.svg?react";
import NodeIcon from "../assets/icons/nodedotjs.svg?react";
import ReactIcon from "../assets/icons/react.svg?react";
import TailwindIcon from "../assets/icons/tailwindcss.svg?react";
import TypescriptIcon from "../assets/icons/typescript.svg?react";
import ViteIcon from "../assets/icons/vite.svg?react";
// import { FileUser } from "lucide-react";

function BioPanel() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <InfoCard label="Overview" className="col-span-2">
        <p className="mb-2">
          Elvia Franco is a product designer and UX engineer who builds things
          that ship. For the past 3.5 years she's led product at Creovia, a K-12
          EdTech platform, owning everything from UX research to frontend
          architecture. She works best when the problem isn't fully defined yet.
        </p>
      </InfoCard>
      <InfoCard label="Education">
        <div>
          <p className="mb-2">M.S. Management, Arizona State University</p>
          <p>B.S. Public Policy, Arizona State University</p>
        </div>
      </InfoCard>
      <InfoCard label="Approach">
        <p>
          Lead with clarity, ask hard questions early, and move fast once the
          direction is set.
        </p>
      </InfoCard>
      <InfoCard label="Tech" className="col-span-2">
        <div className="flex flex-wrap space-x-1">
          <Button link="https://www.figma.com/" label="Figma">
            <FigmaIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.react.com/" label="React">
            <ReactIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.javascript.com/" label="JavaScript">
            <JavascriptIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.typescript.com/" label="TypeScript">
            <TypescriptIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.node.com/" label="Node.js">
            <NodeIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.tailwindcss.com/" label="Tailwind CSS">
            <TailwindIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.html.com/" label="HTML">
            <HtmlIcon className="size-4 fill-current" />
          </Button>
          <Button
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
            label="CSS"
          >
            <CssIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.git.com/" label="Git">
            <GitIcon className="size-4 fill-current" />
          </Button>
          <Button link="https://www.vite.com/" label="Vite">
            <ViteIcon className="size-4 fill-current" />
          </Button>
        </div>
      </InfoCard>
    </div>
  );
}

export default BioPanel;

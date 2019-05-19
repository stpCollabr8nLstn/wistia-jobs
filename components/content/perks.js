import { jobs } from "../../utils/copy";
import Accordion from "../blocks/accordion";
import { PerksProvider } from "../../context/PerksContext";
const { perks } = jobs;
import perksData from "../../perks";

const Perks = () => (
  <PerksProvider>
    <div className="Perks">
      <Accordion>
        <Accordion.Headline>{perks.heading}</Accordion.Headline>
        {perksData.map(perk => (
          <Accordion.Child
            key={perks.name}
            name={perk.name}
            icon={perk.icon}
            title={perk.title}
          >
            {perk.copy}
          </Accordion.Child>
        ))}
      </Accordion>
      <style jsx>{`
        .Perks {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  </PerksProvider>
);

export default Perks;

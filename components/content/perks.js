import { useContext } from "react";
import { jobs } from "../../utils/copy";
import Accordion from "../blocks/accordion";
const { perks } = jobs;
import perksData from "../../perksData";
import { PerksContext } from "../../context/PerksContext";

const Perks = () => {
  const [state, setState] = useContext(PerksContext);
  return (
    <div className="Perks">
      <Accordion>
        <Accordion.Headline>{perks.heading}</Accordion.Headline>
        {perksData.map(perk => (
          <Accordion.Child
            key={perk.name}
            name={perk.name}
            strokeColor={perk.color}
            onClick={() =>
              setState(state => ({ ...state, selectedPerk: perk.name }))
            }
            isSelected={state.selectedPerk === perk.name}
          >
            <Accordion.Icon>{perk.icon}</Accordion.Icon>
            <Accordion.Title>{perk.title}</Accordion.Title>
            {state.selectedPerk === perk.name && (
              <Accordion.Body>{perk.copy}</Accordion.Body>
            )}
          </Accordion.Child>
        ))}
      </Accordion>
      <style jsx>{`
        .Perks {
          display: flex;
          justify-content: center;
          margin: 0 0 64px;
        }
      `}</style>
    </div>
  );
};

export default Perks;

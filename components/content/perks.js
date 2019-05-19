import { jobs } from "../../utils/copy";
import Accordion from "../blocks/accordion";
import { PerksProvider } from "../../context/PerksContext";
const { perks } = jobs;

const Perks = () => (
  <PerksProvider>
    <div className="Perks">
      <Accordion>
        <Accordion.Headline>{perks.heading}</Accordion.Headline>
        <Accordion.Child name="one">some child</Accordion.Child>
        <Accordion.Child name="two">some child</Accordion.Child>
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

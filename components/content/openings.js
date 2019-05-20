import { jobs } from "../../utils/copy";
import BodyText from "../blocks/body-text";
import TitleText from "../blocks/TitleText";

const { openings } = jobs;
const Openings = () => (
  <div className="Openings">
    <TitleText>{openings.heading}</TitleText>
    <BodyText>{openings.body}</BodyText>
  </div>
);

export default Openings;

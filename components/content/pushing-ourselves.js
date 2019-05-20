import Split from "../blocks/split";
import { jobs } from "../../utils/copy";
import BodyText from "../blocks/body-text";
import TitleText from "../blocks/TitleText";

const { pushing } = jobs;
const LeftHeadline = () => <TitleText>{pushing.heading}</TitleText>;

const PushingOurselves = () => (
  <Split>
    <Split.Left>
      <LeftHeadline>{pushing.heading}</LeftHeadline>
      <BodyText>{pushing.body}</BodyText>
    </Split.Left>
    <Split.Right>
      <img src="../../../static/images/hackathon.png" alt={pushing.alt} />
    </Split.Right>
    <style jsx>
      {`
        .Split__headline {
          text-align: left;
        }
      `}
    </style>
  </Split>
);

export default PushingOurselves;

import Split from "../blocks/split";
import { jobs } from "../../utils/copy";
import BodyText from "../blocks/body-text";
import COLORS from "../../utils/colors";

const { pushing } = jobs;
const LeftHeadline = () => (
  <>
    <h4>{pushing.heading}</h4>
    <style jsx>{`
      h4 {
        align-self: center;
        color: ${COLORS.GRAY_6};
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 50px;
        max-width: 900px;
        text-align: left;
      }
    `}</style>
  </>
);

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

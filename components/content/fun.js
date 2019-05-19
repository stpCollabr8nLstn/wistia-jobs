import Split from "../blocks/split";
import { jobs } from "../../utils/copy";
import BodyText from "../blocks/body-text";
import COLORS from "../../utils/colors";

const { fun } = jobs;
const RightHeadline = () => (
  <>
    <h4>{fun.heading}</h4>
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

const Fun = () => (
  <Split>
    <Split.Left>
      <img src="../../../static/images/fun.png" alt={fun.alt} />
    </Split.Left>
    <Split.Right>
      <RightHeadline>{fun.heading}</RightHeadline>
      <BodyText>{fun.body}</BodyText>
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

export default Fun;

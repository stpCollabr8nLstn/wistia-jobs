import Split from "../blocks/split";
import AnchorButton from "../blocks/anchor-button";
import BodyText from "../blocks/body-text";
import { jobs } from "../../utils/copy";
import COLORS from "../../utils/colors";

const { join } = jobs;
const LeftHeadline = () => (
  <>
    <h1>{join.heading}</h1>
    <style jsx>{`
      h1 {
        align-self: center;
        color: ${COLORS.GRAY_6};
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 50px;
        max-width: 900px;
        text-align: left;
      }
    `}</style>
  </>
);
const Join = () => {
  return (
    <Split proportions={[2, 1]}>
      <Split.Left>
        <LeftHeadline>{join.heading}</LeftHeadline>
        <BodyText>{join.body}</BodyText>
        <AnchorButton
          href="#"
          textColor={COLORS.GRAY_0}
          primaryColor={COLORS.BLUE}
          style={{ display: "flex", maxWidth: "50%" }}
        >
          {join.button}
        </AnchorButton>
      </Split.Left>
      <Split.Right>
        <img src="../../../static/images/team-clap.png" alt={join.alt} />
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
};

export default Join;

import Split from "../blocks/split";
import { jobs } from "../../utils/copy";
import BodyText from "../blocks/body-text";
import TitleText from "../blocks/title-text";

const { fun } = jobs;
const RightHeadline = () => <TitleText>{fun.heading}</TitleText>;

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

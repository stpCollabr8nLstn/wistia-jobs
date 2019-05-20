import LongForm from "../blocks/long-form";
import { jobs } from "../../utils/copy";
import COLORS from "../../utils/colors";
import IconHeart from "../icons/icon-heart";

const Diversity = () => {
  return (
    <LongForm backgroundColor={COLORS.PINK_DARK}>
      <LongForm.Icon>
        <IconHeart />
      </LongForm.Icon>
      <LongForm.Headline>{jobs.diversity.heading}</LongForm.Headline>
      <LongForm.Body>{jobs.diversity.body}</LongForm.Body>
    </LongForm>
  );
};

export default Diversity;

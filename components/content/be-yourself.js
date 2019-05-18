import LongForm from "../../blocks/long-form";
import { jobs } from "../../../utils/copy";

const BeYourself = () => {
  return (
    <LongForm>
      <LongForm.Headline>{jobs.beYourself.heading}</LongForm.Headline>
      <LongForm.Body>{jobs.beYourself.body}</LongForm.Body>
      <LongForm.Media>
        <img
          src="../../../static/images/be-yourself.png"
          alt={jobs.beYourself.alt}
        />
      </LongForm.Media>
    </LongForm>
  );
};

export default BeYourself;

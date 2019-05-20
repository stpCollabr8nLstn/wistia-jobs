import { jobs } from "../../utils/copy";
import BodyText from "../blocks/body-text";
import TitleText from "../blocks/title-text";
import LinkedListing from "../blocks/LinkedListing";
import jobData from "../../jobs-data.json";

const { openings } = jobs;
const Openings = () => (
  <div className="Openings">
    <div className="Openings__content">
      <TitleText>{openings.heading}</TitleText>
      <BodyText>{openings.body}</BodyText>
      {jobData.map(dept => (
        <LinkedListing key={dept.id}>
          {dept.jobs.length > 0 && (
            <>
              <LinkedListing.Section>{dept.name}</LinkedListing.Section>
              {dept.jobs.map(job => (
                <LinkedListing.Link key={job.id} link={job.absolute_url}>
                  {job.title}
                </LinkedListing.Link>
              ))}
            </>
          )}
        </LinkedListing>
      ))}
    </div>

    <style jsx>{`
      .Openings {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 64px 0;
      }

      .Openings :global(.Openings__content) {
        display: flex;
        flex-direction: column;
        max-width: 840px;
        margin: 24px;
      }
    `}</style>
  </div>
);

export default Openings;

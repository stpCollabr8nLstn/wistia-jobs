import BodyText from "../blocks/body-text";
import Tile from "../blocks/tile";
import { jobs } from "../../utils/copy";
import IconMapPin from "../icons/icon-map-pin";
import IconHeart from "../icons/icon-heart";
import IconHighFive from "../icons/icon-high-five";

const { location, values, human } = jobs;

const IconInfo = () => {
  return (
    <div className="IconInfo">
      <Tile>
        <Tile.Circle>
          <IconMapPin />
        </Tile.Circle>
        <h3>{location.heading}</h3>
        <BodyText align="center">{location.body}</BodyText>
      </Tile>
      <Tile>
        <Tile.Circle>
          <IconHeart />
        </Tile.Circle>
        <h3>{values.heading}</h3>
        <BodyText align="center">{values.body}</BodyText>
      </Tile>
      <Tile>
        <Tile.Circle>
          <IconHighFive />
        </Tile.Circle>
        <h3>{human.heading}</h3>
        <BodyText align="center">{human.body}</BodyText>
      </Tile>
      <style jsx>
        {`
          .IconInfo {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }

          @media (min-width: 768px) {
            .IconInfo {
              justify-content: space-evenly;
              flex-direction: row;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IconInfo;
